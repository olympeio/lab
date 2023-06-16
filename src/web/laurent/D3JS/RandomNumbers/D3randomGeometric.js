import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3randomGeometric extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} p
     * @param {function(*)} setRandomFunction
     */
    update($, [p], [setRandomFunction]) {
        setRandomFunction(d3.randomGeometric(p));
    }
}

registerBrick('0183dab915ea6014d74f', D3randomGeometric);
