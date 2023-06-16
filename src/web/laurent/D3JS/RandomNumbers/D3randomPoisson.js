import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3randomPoisson extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} lambda
     * @param {function(*)} setRandomFunction
     */
    update($, [lambda], [setRandomFunction]) {
        setRandomFunction(d3.randomPoisson(lambda));
    }
}

registerBrick('0183dac98a6cd3233c83', D3randomPoisson);
