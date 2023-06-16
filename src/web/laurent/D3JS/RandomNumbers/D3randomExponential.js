import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3randomExponential extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} lambda
     * @param {function(*)} setRandomFunction
     */
    update($, [lambda], [setRandomFunction]) {
        setRandomFunction(d3.randomExponential(lambda));
    }
}

registerBrick('0183dab4d1c4c53df90f', D3randomExponential);
