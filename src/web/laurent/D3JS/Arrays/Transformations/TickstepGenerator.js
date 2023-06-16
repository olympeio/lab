import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class TickstepGenerator extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} start
     * @param {number} stop
     * @param {number} count
     * @param {function(*)} setTicksteps
     */
    update($, [start, stop, count], [setTicksteps]) {
        setTicksteps(d3.tickStep(start, stop, count));
    }
}

registerBrick('0183be2012a44e10e9f9', TickstepGenerator);
