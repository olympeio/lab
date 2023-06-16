import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3stackOffsetNone extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setStackOffset
     */
    update($, inputs, [setStackOffset]) {
        setStackOffset(d3.stackOffsetNone);
    }
}

registerBrick('0184008afe7a0e496b4d', D3stackOffsetNone);
