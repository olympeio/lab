import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolateGnBu extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} t
     * @param {function(string)} setRgb
     */
    update($, [t], [setRgb]) {
        setRgb(d3.interpolateGnBu(t))
    }
}

registerBrick('01840abc2522504a96c5', D3interpolateGnBu);
