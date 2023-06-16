import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3stackOffsetWiggle extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setStackOffset
     */
    update($, inputs, [setStackOffset]) {
        setStackOffset(d3.stackOffsetWiggle);
    }
}

registerBrick('0184008ad41b4a2d9f34', D3stackOffsetWiggle);
