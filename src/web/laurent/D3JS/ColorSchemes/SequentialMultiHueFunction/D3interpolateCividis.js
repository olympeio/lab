import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolateCividis extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setFunction
     */
    update($, inputs, [setFunction]) {
        setFunction(d3.interpolateCividis)
    }
}

registerBrick('01867ee8286ba0b2ae23', D3interpolateCividis);
