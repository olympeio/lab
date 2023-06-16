import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3randomWeibull extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} k
     * @param {number} a
     * @param {number} b
     * @param {function(*)} setRandomFunction
     */
    update($, [k, a, b], [setRandomFunction]) {
        setRandomFunction(d3.randomWeibull(k, a, b));
    }
}

registerBrick('0183dac47b705699c11e', D3randomWeibull);
