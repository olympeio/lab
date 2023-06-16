import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolateInferno extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} t
     * @param {function(string)} setRgb
     */
    update($, [t], [setRgb]) {
        setRgb(d3.interpolateInferno(t))
    }
}

registerBrick('01840abb7b680a805b24', D3interpolateInferno);
