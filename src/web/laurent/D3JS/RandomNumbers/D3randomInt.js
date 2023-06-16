import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3randomInt extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} min
     * @param {number} max
     * @param {function(*)} setRandomFunction
     */
    update($, [min, max], [setRandomFunction]) {
        setRandomFunction(d3.randomInt(min, max));
    }
}

registerBrick('0183daae553033f3b358', D3randomInt);
