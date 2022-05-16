import { Color } from "../../common/color";
import { CellVisitor } from "../../game/cell/cell-visitor";
import { EmptyCell } from "../../game/cell/type/empty-cell";
import { OrganicCell } from "../../game/cell/type/organic-cell";
import { OrganismCell } from "../../game/cell/type/organism-cell";
import { WallCell } from "../../game/cell/type/wall-cell";
import { DefaultStrategy } from "./default-strategy";

export class EnergyStrategy extends DefaultStrategy {
    createVisitor(x: number, y: number, cellSize: number): CellVisitor {
        return {
            visitEmpty: (cell: EmptyCell) => {
                
            },
            visitWall: (cell: WallCell) => {
                this.context.fillStyle = this.styles.CELL_WALL_COLOR;
                this.context.fillRect(x, y, cellSize, cellSize);
            },
            visitOrganic: (cell: OrganicCell) => {
                
            },
            visitOrganism: (cell: OrganismCell) => {
                let energy = cell.getEnergy();

                this.context.fillStyle = Color.fromHex('#ffff00').mix(
                    Color.fromHex('#ff0000'),
                    energy / 100
                ).toHexFormat();

                this.context.fillRect(x, y, cellSize, cellSize);
            }
        };
    }
}