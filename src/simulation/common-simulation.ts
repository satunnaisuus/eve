import { shuffle } from "../common/array-utils";
import { Color } from "../common/color";
import { CellContext } from "./cell/cell-context";
import { CellFactory, CreateOptions, PRIMITIVE_ORGANS } from "./cell/cell-factory";
import { createPrimitiveProgram } from "./cell/type/organism-cell";
import { randomDirection } from "./cell/type/organism/direction";
import { Interpreter } from "./cell/type/organism/interpreter";
import { OrganPool } from "./cell/type/organism/organ-pool";
import { Data, PayloadData } from "./data";
import { Grid } from "./grid";
import { Parameter, Dump, DUMP_VERSION, Simulation, StepData } from "./simulation";
import { SimulationParameters } from "./simulation-parameters";
import { Cell, CellType } from "./types/cells";
import { SimulationOptions } from "./types/simulation-options";
import { SimulationParameters as SimulationParametersDto } from "./types/simulation-parameters";

export class CommonSimulation extends Simulation {
    private step = 0;

    private grid: Grid;

    private cellFactory: CellFactory;

    private interpreter: Interpreter;

    private organPool: OrganPool;

    private parameters: SimulationParameters;
    
    private constructor(options?: SimulationOptions, dump?: Dump) {
        if (! options && dump) {
            options = dump.options;
        }

        super(options);

        this.cellFactory = new CellFactory(this.options.programLength);
        this.interpreter = new Interpreter();
        this.organPool = new OrganPool();
        this.parameters = new SimulationParameters();
        this.grid = new Grid(this.options, this.cellFactory);

        this.initResources(options);
        
        if (dump) {
            this.step = dump.step;
            this.parameters = new SimulationParameters(dump.parameters);

            for (let x = 0; x < options.width; x++) {
                for (let y = 0; y < options.height; y++) {
                    this.grid.insert(x, y, this.cellFactory.deserialize(dump.grid[x][y]));
                }
            }
        } else {
            const population = Math.ceil(options.width * options.height * options.population / 100);
            this.spawnOrganisms(population, options.initialEnergy, options.programLength);
        }
    }

    static createFromDump(dump: Dump): CommonSimulation {
        return new CommonSimulation(null, dump);
    }

    static create(options: SimulationOptions): CommonSimulation {
        return new CommonSimulation(options);
    }

    async makeStep(): Promise<number> {
        const cells = this.grid.toArray();
        const context = new CellContext(this.grid, 0, 0, this.cellFactory, this.interpreter, this.organPool, this.parameters);

        for (let x = 0; x < cells.length; x++) {
            for (let y = 0; y < cells[x].length; y++) {
                const cell = cells[x][y];

                if (cell.isStatic()) {
                    continue;
                }

                context.setX(x);
                context.setY(y);

                cell.update(context);
            }
        }

        return this.step++;
    }

    async getState(payload: PayloadData): Promise<StepData> {
        const data = Data.create(this.grid, payload);
        
        return {
            step: this.step,
            buffer: data.getArray().buffer,
            payload: payload,
        };
    }

    async setParameter<T>(parameter: Parameter, value: T): Promise<T> {
        this.parameters[parameter] = value as any;
        return this.parameters[parameter] as any;
    }

    async getOrganismsCount(): Promise<number> {
        let result = 0;

        for (let x = 0; x < this.grid.getWidth(); x++) {
            for (let y = 0; y < this.grid.getHeight(); y++) {
                const cell = this.grid.getCell(x, y);

                if (cell.getType() === CellType.ORGANISM) {
                    result++;
                }
            }
        }

        return result;
    }

    async findCellById(id: number): Promise<Cell> {
        const cell = this.grid.find(id);

        if (cell) {
            return cell.serialize();
        }

        return null;
    }

    async getCell(x: number, y: number): Promise<Cell> {
        return this.grid.getCell(x, y).serialize();
    }

    async replace(coords: [number, number][], type: CellType, ignore: CellType[], options: CreateOptions): Promise<void> {
        for (const [x, y] of coords) {
            const cell = this.grid.getCell(x, y);

            if (! ignore.includes(cell.getType())) {
                this.grid.insert(x, y, this.cellFactory.create(type, options));
            }
        }
    }

    async dump(): Promise<Dump> {
        return {
            options: this.options,
            parameters: this.parameters.serialize(),
            step: this.step,
            grid: this.grid.serialize(),
            version: DUMP_VERSION,
        }
    }

    async getParameters(): Promise<SimulationParametersDto> {
        return this.parameters.serialize();
    }

    private spawnOrganisms(count: number, initialEnergy: number, programLength: number): void {
        const coordinates: [number, number][] = [];
        const cells = this.grid.toArray();
    
        for (let x = 0; x < cells.length; x++) {
            for (let y = 0; y < cells[x].length; y++) {
                const cell = cells[x][y];
    
                if (cell.isEmpty()) {
                    coordinates.push([x, y]);
                }
            }
        }
    
        for (const [x, y] of shuffle(coordinates).slice(0, count)) {
            this.grid.insert(x, y, this.cellFactory.createOrganism(
                PRIMITIVE_ORGANS,
                Color.random(),
                createPrimitiveProgram(programLength),
                initialEnergy,
                randomDirection(),
                new Color(0, 255, 0),
            ));
        }
    }

    private initResources(options: SimulationOptions): void {
        const lightHeight = Math.round(options.height * options.lightDepth / 100);
        const mineralsHeight = Math.round(options.height * options.mineralsDepth / 100);
        const mineralsStartY = options.height - mineralsHeight;

        for (let x = 0; x < options.width; x++) {
            for (let y = 0; y < options.height; y++) {
                let light = 100;
                let minerals = 100;

                if (y >= lightHeight) {
                    light = 0;
                } else if (options.lightGradient) {
                    light = 100 - Math.round(100 * y / lightHeight);
                }

                if (y < mineralsStartY) {
                    minerals = 0;
                } else if (options.lightGradient) {
                    minerals = Math.ceil(100 * (y - mineralsStartY) / mineralsHeight);
                }

                this.grid.setLightLevel(x, y, light);
                this.grid.setMineralsLevel(x, y, minerals);
            }
        }
    }
}