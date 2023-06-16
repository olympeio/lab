import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3axisTop extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {d3.Scale} scale
     * @param {function(d3.Axis)} setAxis
     */
    update($, [scale], [setAxis]) {
        setAxis(d3.axisTop(scale));
    }
}

registerBrick('0183dd27f928097dfb4f', D3axisTop);
