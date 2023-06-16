import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolatePlasma extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setFunction
     */
    update($, inputs, [setFunction]) {
        setFunction(d3.interpolatePlasma)
    }
}

registerBrick('01867ee8286ba19db47e', D3interpolatePlasma);
