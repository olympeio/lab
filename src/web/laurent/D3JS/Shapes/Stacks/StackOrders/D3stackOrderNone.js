import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3stackOrderNone extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setStackOrder
     */
    update($,inputs, [setStackOrder]) {
        setStackOrder(d3.stackOrderNone);
    }
}

registerBrick('01840068d0047a45bffb', D3stackOrderNone);
