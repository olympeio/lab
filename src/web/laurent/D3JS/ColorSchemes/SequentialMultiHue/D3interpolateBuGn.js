import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolateBuGn extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} t
     * @param {function(string)} setRgb
     */
    update($, [t], [setRgb]) {
        setRgb(d3.interpolateBuGn(t))
    }
}

registerBrick('01840abc2fcfbac53e4e', D3interpolateBuGn);
