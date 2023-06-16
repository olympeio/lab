import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolateRdYlGn extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} t
     * @param {function(string)} setRgb
     */
    update($, [t], [setRgb]) {
        setRgb(d3.interpolateRdYlGn(t))
    }
}

registerBrick('0183dcd22f75f81a4d57', D3interpolateRdYlGn);
