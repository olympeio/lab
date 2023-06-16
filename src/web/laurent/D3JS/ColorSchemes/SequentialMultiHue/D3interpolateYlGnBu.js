import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolateYlGnBu extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} t
     * @param {function(string)} setRgb
     */
    update($, [t], [setRgb]) {
        setRgb(d3.interpolateYlGnBu(t))
    }
}

registerBrick('01840abb6f506990c3f6', D3interpolateYlGnBu);
