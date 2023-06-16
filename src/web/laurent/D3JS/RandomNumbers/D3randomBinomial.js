import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3randomBinomial extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} n
     * @param {number} p
     * @param {function(*)} setRandomFunction
     */
    update($, [n, p], [setRandomFunction]) {
        setRandomFunction(d3.randomBinomial(n, p));
    }
}

registerBrick('0183daba18c606463d8a', D3randomBinomial);
