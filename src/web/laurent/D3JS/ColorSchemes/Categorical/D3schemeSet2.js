import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3schemeSet2 extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setColors
     */
    update($, inputs, [setColors]) {
        setColors(d3.schemeSet2);
    }
}

registerBrick('0183dc9189445384802b', D3schemeSet2);
