import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3randomNormal extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} mu
     * @param {number} sigma
     * @param {function(*)} setRandomFunction
     */
    update($, [mu, sigma], [setRandomFunction]) {
        setRandomFunction(d3.randomNormal(mu, sigma));
    }
}

registerBrick('0183daaeac161cd667e3', D3randomNormal);
