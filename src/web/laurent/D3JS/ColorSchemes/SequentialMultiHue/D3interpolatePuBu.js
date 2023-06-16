import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolatePuBu extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} t
     * @param {function(string)} setRgb
     */
    update($, [t], [setRgb]) {
        setRgb(d3.interpolatePuBu(t))
    }
}

registerBrick('01840abbd15dd71e951a', D3interpolatePuBu);
