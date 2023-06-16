import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolatePuBuGn extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} t
     * @param {function(string)} setRgb
     */
    update($, [t], [setRgb]) {
        setRgb(d3.interpolatePuBuGn(t))
    }
}

registerBrick('01840abbeaf506b9aac1', D3interpolatePuBuGn);
