import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolateYlOrBr extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} t
     * @param {function(string)} setRgb
     */
    update($, [t], [setRgb]) {
        setRgb(d3.interpolateYlOrBr(t))
    }
}

registerBrick('01840abb25a6872c5c79', D3interpolateYlOrBr);
