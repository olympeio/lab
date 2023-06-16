import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3randomCauchy extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} a
     * @param {number} b
     * @param {function(*)} setRandomFunction
     */
    update($, [a, b], [setRandomFunction]) {
        setRandomFunction(d3.randomCauchy(a,b));
    }
}

registerBrick('0183dac7fae1c8fa6838', D3randomCauchy);
