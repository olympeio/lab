import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class LineGenerator extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {string} defined
     * @param {string} curve
     * @param {function(string)} setLine
     */
    update($, [defined, curve], [setLine]) {
        const line = d3.line();
        console.log('c',curve)
        line.defined(defined);
        line.curve(curve);
        setLine(line);
    }
}

registerBrick('0183ea2a900637202ebe', LineGenerator);
