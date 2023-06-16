import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolateWarm extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} t
     * @param {function(string)} setRgb
     */
    update($, [t], [setRgb]) {
        setRgb(d3.interpolateWarm(t))
    }
}

registerBrick('01840abbdc379bda7342', D3interpolateWarm);
