import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3stackOffsetSilhouette extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setStackOffset
     */
    update($, inputs, [setStackOffset]) {
        setStackOffset(d3.stackOffsetSilhouette);
    }
}

registerBrick('0184008ae36353a78116', D3stackOffsetSilhouette);
