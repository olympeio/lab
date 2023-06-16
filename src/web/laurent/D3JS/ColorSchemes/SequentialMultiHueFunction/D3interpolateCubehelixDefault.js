import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolateCubehelixDefault extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setFunction
     */
    update($, inputs, [setFunction]) {
        setFunction(d3.interpolateCubehelixDefault)
    }
}

registerBrick('01867ee8286bf36c93d1', D3interpolateCubehelixDefault);
