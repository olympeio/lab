import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3randomGamma extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} k
     * @param {number} theta
     * @param {function(*)} setRandomFunction
     */
    update($, [k, theta], [setRandomFunction]) {
        setRandomFunction(d3.randomGamma(k, theta));
    }
}

registerBrick('0183dabb82c588efbf82', D3randomGamma);
