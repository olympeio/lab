import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolatePiYG extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} t
     * @param {function(string)} setRgb
     */
    update($, [t], [setRgb]) {
        setRgb(d3.interpolatePiYG(t))
    }
}

registerBrick('0183dcd26c396a269bc7', D3interpolatePiYG);
