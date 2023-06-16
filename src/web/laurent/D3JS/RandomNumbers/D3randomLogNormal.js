import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3randomLogNormal extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} mu
     * @param {number} sigma
     * @param {function(*)} setRandomFunction
     */
    update($, [mu, sigma], [setRandomFunction]) {
        setRandomFunction(d3.randomLogNormal(mu, sigma));
    }
}

registerBrick('0183dab1c52b9484cbce', D3randomLogNormal);
