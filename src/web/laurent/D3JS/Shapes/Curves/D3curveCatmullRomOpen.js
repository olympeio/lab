import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3curveCatmullRomOpen extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} alpha
     * @param {function(d3.Curve)} setCurve
     */
    update($, [alpha], [setCurve]) {
        setCurve(d3.curveCatmullRomOpen.alpha(alpha));
    }
}

registerBrick('0183ed0b7943098f6377', D3curveCatmullRomOpen);
