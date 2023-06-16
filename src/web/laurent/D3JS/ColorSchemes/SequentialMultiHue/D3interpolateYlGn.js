import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolateYlGn extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} t
     * @param {function(string)} setRgb
     */
    update($, [t], [setRgb]) {
        setRgb(d3.interpolateYlGn(t))
    }
}

registerBrick('01840abb33f0c315f53f', D3interpolateYlGn);
