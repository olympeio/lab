import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolatePuRd extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} t
     * @param {function(string)} setRgb
     */
    update($, [t], [setRgb]) {
        setRgb(d3.interpolatePuRd(t))
    }
}

registerBrick('01840abbb9003e0de678', D3interpolatePuRd);
