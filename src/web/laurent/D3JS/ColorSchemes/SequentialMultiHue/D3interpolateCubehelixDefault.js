import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolateCubehelixDefault extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} t
     * @param {function(string)} setRgb
     */
    update($, [t], [setRgb]) {
        setRgb(d3.interpolateCubehelixDefault(t))
    }
}

registerBrick('01840abc18dbb4987a56', D3interpolateCubehelixDefault);
