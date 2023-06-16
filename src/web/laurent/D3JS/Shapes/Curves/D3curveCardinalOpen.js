import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3curveCardinalOpen extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} tension
     * @param {function(d3.Curve)} setCurve
     */
    update($, [tension], [setCurve]) {
        setCurve(d3.curveCardinalOpen.tension(tension));
    }
}

registerBrick('0183ed08d453d1cd88b4', D3curveCardinalOpen);
