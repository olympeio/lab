import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolateCividis extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} t
     * @param {function(string)} setRgb
     */
    update($, [t], [setRgb]) {
        setRgb(d3.interpolateCividis(t))
    }
}

registerBrick('01840abbc4f809afde81', D3interpolateCividis);
