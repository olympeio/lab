import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class Axisticks extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {d3.Axis} axis
     * @param {number} ticks
     * @param {function(*)} setAxisGenerator
     */
    update($, [axis, ticks], [setAxisGenerator]) {
        setAxisGenerator(axis.ticks(ticks));
    }
}

registerBrick('0183dd30c8337280616b', Axisticks);
