import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3curveBundle extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} beta
     * @param {function(d3.Curve)} setCurve
     */
    update($, [beta], [setCurve]) {
        setCurve(d3.curveBundle.beta(beta));
    }
}

registerBrick('0183ed061b23f0e4f3b0', D3curveBundle);
