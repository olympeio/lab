import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3stackOrderDescending extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setStackOrder
     */
    update($, inputs, [setStackOrder]) {
        setStackOrder(d3.stackOrderDescending);
    }
}

registerBrick('01840068e9304a6466a4', D3stackOrderDescending);
