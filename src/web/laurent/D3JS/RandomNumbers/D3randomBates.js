import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3randomBates extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} n
     * @param {function(*)} setRandomFunction
     */
    update($, [n], [setRandomFunction]) {
        setRandomFunction(d3.randomBates(n));
    }
}

registerBrick('0183dab2c50faecf02b8', D3randomBates);
