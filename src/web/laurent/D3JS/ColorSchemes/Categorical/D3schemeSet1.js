import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3schemeSet1 extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setColors
     */
    update($, inputs, [setColors]) {
        setColors(d3.schemeSet1);
    }
}

registerBrick('0183dc91987246ea2e9d', D3schemeSet1);
