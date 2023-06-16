import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3schemeTableau10 extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setColors
     */
    update($, inputs, [setColors]) {
        setColors(d3.schemeTableau10);
    }
}

registerBrick('0183dc916acf05367758', D3schemeTableau10);
