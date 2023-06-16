import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolatePuOr extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} t
     * @param {function(string)} setRgb
     */
    update($, [t], [setRgb]) {
        setRgb(d3.interpolatePuOr(t))
    }
}

registerBrick('0183dcd25f991b778451', D3interpolatePuOr);
