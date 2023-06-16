import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3stackOrderReverse extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setStackOrder
     */
    update($, inputs, [setStackOrder]) {
        setStackOrder(d3.stackOrderReverse);
    }
}

registerBrick('01840068c49a79481620', D3stackOrderReverse);
