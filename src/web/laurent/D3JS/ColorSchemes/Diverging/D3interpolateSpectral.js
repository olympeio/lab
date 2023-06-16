import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolateSpectral extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} t
     * @param {function(string)} setRgb
     */
    update($, [t], [setRgb]) {
        setRgb(d3.interpolateSpectral(t))
    }
}

registerBrick('0183dcd1a007fc2c1538', D3interpolateSpectral);
