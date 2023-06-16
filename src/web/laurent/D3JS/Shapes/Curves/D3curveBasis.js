import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3curveBasis extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(d3.Curve)} setCurve
     */
    update($, inputs, [setCurve]) {
        setCurve(d3.curveBasis);
    }
}

registerBrick('0183eceed69f937aa013', D3curveBasis);
