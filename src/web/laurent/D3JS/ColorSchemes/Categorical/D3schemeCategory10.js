import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3schemeCategory10 extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setColors
     */
    update($, inputs, [setColors]) {
        setColors(d3.schemeCategory10)
    }
}

registerBrick('0183dc8c88fa4b774503', D3schemeCategory10);
