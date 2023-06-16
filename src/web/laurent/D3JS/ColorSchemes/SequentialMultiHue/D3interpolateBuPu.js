import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolateBuPu extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} t
     * @param {function(string)} setRgb
     */
    update($, [t], [setRgb]) {
        setRgb(d3.interpolateBuPu(t))
    }
}

registerBrick('01840abc3c40908d41d4', D3interpolateBuPu);
