import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolateRdPu extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} t
     * @param {function(string)} setRgb
     */
    update($, [t], [setRgb]) {
        setRgb(d3.interpolateRdPu(t))
    }
}

registerBrick('01840abba0c79bd41976', D3interpolateRdPu);
