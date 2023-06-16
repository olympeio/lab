import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3schemeDark2 extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setColors
     */
    update($, inputs, [setColors]) {
        setColors(d3.schemeDark2);
    }
}

registerBrick('0183dc91cc0f2f6d527a', D3schemeDark2);
