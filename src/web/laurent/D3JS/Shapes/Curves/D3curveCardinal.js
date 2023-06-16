import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3curveCardinal extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} tension
     * @param {function(d3.Curve)} setCurve
     */
    update($, [tension], [setCurve]) {
        setCurve(d3.curveCardinal.tension(tension));
    }
}

registerBrick('0183ed07b1dffbf30690', D3curveCardinal);
