import { Brick, registerBrick } from 'olympe'
import * as d3 from "d3";

export default class D3stackOrderAppearance extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setStackOrder
     */
    update($, inputs, [setStackOrder]) {
        setStackOrder(d3.stackOrderAppearance);
    }
}

registerBrick('018400679e3fc9f04302', D3stackOrderAppearance);
