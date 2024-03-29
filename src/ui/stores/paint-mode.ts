import { makeObservable, observable, action, toJS } from "mobx";
import { CreateOptions } from "../../simulation/cell/cell-factory";
import { CellType, GenomeSerialized } from "../../simulation/types/cells";
import { RendererStore } from "./renderer-store";
import { SimulationStore } from "./simulation-store";

export enum BrushType {
    SQUARE = 'SQUARE',
    CIRCLE = 'CIRCLE'
}

const HISTORY_CLEAR_TIMEOUT = 1000;

export class PaintMode {
    @observable
    private enabled = false;

    @observable
    private type: CellType = CellType.ORGANIC;

    @observable
    private brush: BrushType = BrushType.SQUARE;

    @observable
    private size = 1;

    @observable
    private ignore: CellType[] = [];

    @observable
    private genome: GenomeSerialized = null;

    private lastPainted: {[key: string]: number} = {};

    constructor(
        private simulation: SimulationStore,
        private canvasRenderer: RendererStore
    ) {
        makeObservable(this);
    }

    isEnabled(): boolean {
        return this.enabled;
    }

    @action
    setEnabled(enabled: boolean): void {
        this.enabled = enabled;
    }

    getType(): CellType {
        return this.type;
    }

    @action
    setType(type: CellType): void {
        this.type = type;
    }

    getBrush(): BrushType {
        return this.brush;
    }

    @action
    setBrush(brush: BrushType): void {
        this.brush = brush;
    }

    getSize(): number {
        return this.size;
    }

    @action
    setSize(size: number): void {
        this.size = size;
    }

    getIgnore(): CellType[] {
        return this.ignore;
    }

    @action
    addIgnore(type: CellType): void {
        this.ignore.push(type);
    }

    @action
    removeIgnore(type: CellType): void {
        this.ignore = this.ignore.filter(i => i !== type);
    }

    @action
    setClipboard(genome: GenomeSerialized): void {
        this.genome = genome
    }

    @action
    clearClipboard(): void {
        this.genome = null;
    }

    isIgnore(type: CellType): boolean {
        return this.ignore.includes(type);
    }

    paint(centerX: number, centerY: number): void {
        this.clearPaintHistory();

        const width = this.simulation.getOptions().width;
        const height = this.simulation.getOptions().height;

        const size = this.getSize() - 1;

        const cells: [number, number][] = [];

        const now = +Date.now();

        const putPixel = (cellX: number, cellY: number) => {
            if (cellX < 0 || cellY < 0 || cellX >= width || cellY >= height) {
                return;
            }

            const key = cellX + ':' + cellY;

            if (! this.lastPainted[key]) {
                cells.push([cellX, cellY]);
            }
            
            this.lastPainted[key] = now;
        }
        
        if (this.getBrush() === BrushType.SQUARE) {
            for (let xi = 0; xi < 1 + size * 2; xi++) {
                for (let yi = 0; yi < 1 + size * 2; yi++) {
                    putPixel(centerX - size + xi, centerY - size + yi);
                }
            }
        } else if (this.getBrush() === BrushType.CIRCLE) {
            let IG = size * 2 - 3;
            let IDGR = -6;
            let IDGD = size * 4 - 10;
            
            let IX = 0;
            let IY = size;
            
            while (IY >= IX) {
                for (let n = size - IX; n <= size + IX; n++) {
                    putPixel(n + centerX - size, centerY + IY);
                    putPixel(n + centerX - size, centerY - IY);
                }

                for (let n = size - IY; n <= size + IY; n++) {
                    putPixel(n + centerX - size, centerY + IX);
                    putPixel(n + centerX - size, centerY - IX);
                }

                if (IG < 0) {
                    IG = IG + IDGD
                    IDGD -= 8
                    IY -= 1
                } else {
                    IG += IDGR
                    IDGD -= 4
                }

                IDGR -= 4
                IX += 1
            }
        }

        if (cells.length === 0) {
            return;
        }

        const options: CreateOptions = {};

        if (this.genome) {
            options['genome'] = toJS(this.genome);
        }

        this.simulation.replace(cells, this.getType(), toJS(this.ignore), options).then(() => {
            this.canvasRenderer.update();
        });
    }

    private clearPaintHistory(): void {
        const now = +Date.now();

        for (const key in this.lastPainted) {
            if (this.lastPainted[key] + HISTORY_CLEAR_TIMEOUT < now) {
                delete this.lastPainted[key];
            }
        }
    }
}