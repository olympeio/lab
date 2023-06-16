import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3curveCardinalClosed extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} tension
     * @param {function(d3.Curve)} setCurve
     */
    update($, [tension], [setCurve]) {
        setCurve(d3.curveCardinalClosed.tension(tension));
    }
}

registerBrick('0183ed0863699aadf4e1', D3curveCardinalClosed);
