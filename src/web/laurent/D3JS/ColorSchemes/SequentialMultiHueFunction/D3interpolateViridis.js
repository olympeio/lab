import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolateViridis extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setFunction
     */
    update($, inputs, [setFunction]) {
        setFunction(d3.interpolateViridis)
    }
}

registerBrick('01867ee8286b6df32f08', D3interpolateViridis);
