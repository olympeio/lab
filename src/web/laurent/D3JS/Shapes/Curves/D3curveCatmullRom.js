import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3curveCatmullRom extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} alpha
     * @param {function(d3.Curve)} setCurve
     */
    update($, [alpha], [setCurve]) {
        setCurve(d3.curveCatmullRom.alpha(alpha));
    }
}

registerBrick('0183ed09ce50cacf9813', D3curveCatmullRom);
