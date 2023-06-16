import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3stackOrderInsideOut extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setStackOrder
     */
    update($, inputs, [setStackOrder]) {
        setStackOrder(d3.stackOrderInsideOut);
    }
}

registerBrick('01840068dd94f1c4af76', D3stackOrderInsideOut);
