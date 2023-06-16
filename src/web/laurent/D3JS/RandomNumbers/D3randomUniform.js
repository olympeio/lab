import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3randomUniform extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} min
     * @param {number} max
     * @param {function(*)} setRandomFunction
     */
    update($, [min, max], [setRandomFunction]) {
        setRandomFunction(d3.randomUniform(min, max));
    }
}

registerBrick('0183daaadb2e98767279', D3randomUniform);
