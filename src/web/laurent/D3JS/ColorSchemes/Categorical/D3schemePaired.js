import { Brick, registerBrick } from 'olympe';

import * as d3 from "d3";
export default class D3schemePaired extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setColors
     */
    update($, inputs, [setColors]) {
        setColors(d3.schemePaired);
    }
}

registerBrick('0183dc91be345535a8c9', D3schemePaired);
