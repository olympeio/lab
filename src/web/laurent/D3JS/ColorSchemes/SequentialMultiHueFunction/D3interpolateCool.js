import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolateCool extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setFunction
     */
    update($, inputs, [setFunction]) {
        setFunction(d3.interpolateCool)
    }
}

registerBrick('01867ee8286b5712348e', D3interpolateCool);
