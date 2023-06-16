import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolateRdGy extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} t
     * @param {function(string)} setRgb
     */
    update($, [t], [setRgb]) {
        setRgb(d3.interpolateRdGy(t))
    }
}

registerBrick('0183dcd246d4cdc8abc6', D3interpolateRdGy);
