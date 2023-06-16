import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolateRdYlBu extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} t
     * @param {function(string)} setRgb
     */
    update($, [t], [setRgb]) {
        setRgb(d3.interpolateRdYlBu(t))
    }
}

registerBrick('0183dcd239bea1a9e3d6', D3interpolateRdYlBu);
