import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3randomBeta extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} alpha
     * @param {number} beta
     * @param {function(*)} setRandomFunction
     */
    update($, [alpha, beta], [setRandomFunction]) {
        setRandomFunction(d3.randomBeta(alpha, beta));
    }
}

registerBrick('0183dabce48551e012cf', D3randomBeta);
