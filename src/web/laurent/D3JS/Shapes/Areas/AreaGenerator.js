import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";


export default class AreaGenerator extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {boolean} defined
     * @param {d3.Curve} curve
     * @param {function(*)} setArea
     */
    update($, [defined, curve], [setArea]) {
        const area = d3.area()
        .curve(curve)
        .defined(defined)

        setArea(area);
    }
}

registerBrick('0183e9caf414a3499388', AreaGenerator);




