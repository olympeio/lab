import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3stackOrderAscending extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setStackOrder
     */
    update($, inputs, [setStackOrder]) {
        setStackOrder(d3.stackOrderAscending);
    }
}

registerBrick('01840068f635db2e7ecc', D3stackOrderAscending);
