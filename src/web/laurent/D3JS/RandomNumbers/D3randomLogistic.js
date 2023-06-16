import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3randomLogistic extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} a
     * @param {number} b
     * @param {function(*)} setRandomFunction
     */
    update($, [a, b], [setRandomFunction]) {
        setRandomFunction(d3.randomLogistic(a,b));
    }
}

registerBrick('0183dac8ea36d21bae4f', D3randomLogistic);
