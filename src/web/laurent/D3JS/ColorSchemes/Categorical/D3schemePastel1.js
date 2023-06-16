import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3schemePastel1 extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setColors
     */
    update($, inputs, [setColors]) {
        setColors(d3.schemePastel1);
    }
}

registerBrick('0183dc91b1ee039cfb5f', D3schemePastel1);
