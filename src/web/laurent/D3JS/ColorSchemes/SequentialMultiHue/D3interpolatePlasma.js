import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolatePlasma extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} t
     * @param {function(string)} setRgb
     */
    update($, [t], [setRgb]) {
        setRgb(d3.interpolatePlasma(t))
    }
}

registerBrick('01840abbad6132cfa57c', D3interpolatePlasma);
