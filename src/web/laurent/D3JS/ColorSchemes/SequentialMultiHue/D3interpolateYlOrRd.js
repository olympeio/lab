import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolateYlOrRd extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} t
     * @param {function(string)} setRgb
     */
    update($, [t], [setRgb]) {
        setRgb(d3.interpolateYlOrRd(t))
    }
}

registerBrick('01840ab9ef118b5de427', D3interpolateYlOrRd);
