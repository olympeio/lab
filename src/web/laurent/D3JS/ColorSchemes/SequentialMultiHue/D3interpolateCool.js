import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolateCool extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} t
     * @param {function(string)} setRgb
     */
    update($, [t], [setRgb]) {
        setRgb(d3.interpolateCool(t))
    }
}

registerBrick('01840abbf841743245df', D3interpolateCool);
