import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3schemeSet3 extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setColors
     */
    update($, inputs, [setColors]) {
        setColors(d3.schemeSet3);
    }
}

registerBrick('0183dc9179fbaf89b55b', D3schemeSet3);
