import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3schemePastel2 extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setColors
     */
    update($, inputs, [setColors]) {
        setColors(d3.schemePastel2);
    }
}

registerBrick('0183dc91a685111ca5bf', D3schemePastel2);
