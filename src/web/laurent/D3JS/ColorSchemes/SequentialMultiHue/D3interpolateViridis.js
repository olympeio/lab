import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolateViridis extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} t
     * @param {function(string)} setRgb
     */
    update($, [t], [setRgb]) {
        setRgb(d3.interpolateViridis(t))
    }
}

registerBrick('01840abb882a8b136a5b', D3interpolateViridis);
