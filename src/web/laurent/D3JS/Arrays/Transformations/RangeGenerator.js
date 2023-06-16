import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class RangeGenerator extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} start
     * @param {number} stop
     * @param {number} step
     * @param {function(*)} setRange
     */
    update($, [start, stop, step], [setRange]) {
        setRange(d3.range(start, stop, step));
    }
}

registerBrick('0183be0e552d80797cd1', RangeGenerator);
