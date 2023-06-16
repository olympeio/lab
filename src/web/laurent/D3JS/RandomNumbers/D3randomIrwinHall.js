import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3randomIrwinHall extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} n
     * @param {function(*)} setRandomFunction
     */
    update($, [n], [setRandomFunction]) {
        setRandomFunction(d3.randomIrwinHall(n));
    }
}

registerBrick('0183dab3f2da1ae75928', D3randomIrwinHall);
