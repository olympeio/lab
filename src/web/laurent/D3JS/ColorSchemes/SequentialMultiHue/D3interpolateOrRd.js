import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolateOrRd extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} t
     * @param {function(string)} setRgb
     */
    update($, [t], [setRgb]) {
        setRgb(d3.interpolateOrRd(t))
    }
}

registerBrick('01840abc0649e881ec63', D3interpolateOrRd);
