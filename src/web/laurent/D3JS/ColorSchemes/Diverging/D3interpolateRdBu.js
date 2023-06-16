import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolateRdBu extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} t
     * @param {function(string)} setRgb
     */
    update($, [t], [setRgb]) {
        setRgb(d3.interpolateRdBu(t))
    }
}

registerBrick('0183dcd253bb7e877eb6', D3interpolateRdBu);
