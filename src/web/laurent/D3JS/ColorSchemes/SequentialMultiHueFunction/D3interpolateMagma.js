import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolateMagma extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setFunction
     */
    update($, inputs, [setFunction]) {
        setFunction(d3.interpolateMagma)
    }
}

registerBrick('01867ee8286b386addd6', D3interpolateMagma);
