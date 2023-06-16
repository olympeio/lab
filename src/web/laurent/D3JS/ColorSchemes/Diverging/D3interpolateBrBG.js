import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolateBrBG extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} t
     * @param {function(string)} setRgb
     */
    update($, [t], [setRgb]) {
        setRgb(d3.interpolateBrBG(t))
    }
}

registerBrick('0183dcc8d29319e33fa9', D3interpolateBrBG);
