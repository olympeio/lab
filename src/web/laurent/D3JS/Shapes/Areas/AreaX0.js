import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class AreaX0 extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {d3.Area} area
     * @param {Brick} mapper
     * @param {Object} config
     * @param {function(d3.Area)} setArea
     */
    update($, [area, mapper, config], [setArea]) {
        const [dataIn$, index$, options$] = mapper.getInputs();
        const [dataOut$] = mapper.getOutputs();

        const proc = function(dataIn, index, nodes){
            return $.runner(mapper)
                .set(dataIn$, dataIn)
                .set(index$, index)
                .set(options$, config)
                .get(dataOut$)
        };

        area.x0(proc);
        
        //this is required to force a dataflow if new inputs
        setArea(null);
        setArea(area);
    }
}

registerBrick('0183f0dd902c425d409d', AreaX0);
