import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3schemeAccent extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setColors
     */
    update($, inputs, [setColors]) {
        setColors(d3.schemeAccent);
    }
}

registerBrick('0183dc908e89229bb1c4', D3schemeAccent);
