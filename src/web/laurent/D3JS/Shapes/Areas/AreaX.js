import { Brick, registerBrick } from 'olympe';

export default class AreaX extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} area
     * @param {*} mapper
     * @param {*} config
     * @param {function(*)} setArea
     */
    update($, [area, mapper, config], [setArea]) {
        const [dataIn$, index$, options$] = mapper.getInputs();
        const [dataOut$] = mapper.getOutputs();
        //console.log("area.x", area, mapper, config);
        const proc = function(dataIn, index, nodes){
            return $.runner(mapper)
                .set(dataIn$, dataIn)
                .set(index$, index)
                .set(options$, config)
                .get(dataOut$)
        };

        //this is required to force a dataflow if new inputs (new area typically)
        setArea(null);
        setArea(area.x(proc));
    }
}

registerBrick('0183f10167dc46fc3730', AreaX);
