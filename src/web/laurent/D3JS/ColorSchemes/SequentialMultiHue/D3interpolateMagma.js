import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolateMagma extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} t
     * @param {function(string)} setRgb
     */
    update($, [t], [setRgb]) {
        setRgb(d3.interpolateMagma(t))
    }
}

registerBrick('01840abb94a2ec45b3ad', D3interpolateMagma);
