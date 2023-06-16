import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3stackOffsetDiverging extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setStackOffset
     */
    update($, inputs, [setStackOffset]) {
        setStackOffset(d3.stackOffsetDiverging);
    }
}

registerBrick('0184008b09eb471b9466', D3stackOffsetDiverging);
