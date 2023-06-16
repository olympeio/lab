import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3stackOffsetExpand extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setStackOffset
     */
    update($, inputs, [setStackOffset]) {
        setStackOffset(d3.stackOffsetExpand);
    }
}

registerBrick('01840088b5a365f0499e', D3stackOffsetExpand);
