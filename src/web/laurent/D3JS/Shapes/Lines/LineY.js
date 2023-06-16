import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class LineY extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {d3.Line} line
     * @param {Brick} function$
     * @param {function(d3.Line)} setLine
     */
    update($, [line, function$, options], [setLine]) {
        const [dataIn$, index$, options$] = function$.getInputs();
        const [dataOut$] = function$.getOutputs();

        const proc = function(dataIn, index, nodes){
            return $.runner(function$)
                .set(dataIn$, dataIn)
                .set(index$, index)
                .set(options$, options)
                .get(dataOut$)
        };

        line.y(proc);

        //this is required to force a dataflow if new inputs
        setLine(null);
        setLine(line);
    }
}

registerBrick('0183ea324a5e1295e1c2', LineY);
