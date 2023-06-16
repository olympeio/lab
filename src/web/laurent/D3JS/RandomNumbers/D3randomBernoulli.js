import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3randomBernoulli extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} p
     * @param {function(*)} setRandomFunction
     */
    update($, [p], [setRandomFunction]) {
        setRandomFunction(d3.randomBernoulli(p));
    }
}

registerBrick('0183dab6c11ad009329e', D3randomBernoulli);
