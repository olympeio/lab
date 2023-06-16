import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3randomPareto extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} alpha
     * @param {function(*)} setRandomFunction
     */
    update($, [alpha], [setRandomFunction]) {
        setRandomFunction(d3.randomPareto(alpha));
    }
}

registerBrick('0183dab5ed2455a39252', D3randomPareto);
