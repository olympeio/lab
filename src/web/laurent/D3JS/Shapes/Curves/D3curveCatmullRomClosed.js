import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3curveCatmullRomClosed extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} alpha
     * @param {function(d3.Curve)} setCurve
     */
    update($, [alpha], [setCurve]) {
        setCurve(d3.curveCatmullRomClosed.alpha(alpha));
    }
}

registerBrick('0183ed0af2da8c84c4d3', D3curveCatmullRomClosed);
