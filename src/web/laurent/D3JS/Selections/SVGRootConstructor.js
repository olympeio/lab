import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class SVGRootConstructor extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(d3.Selection)} setD3Root
     */
    update($, inputs, [setD3Root]) {
        setD3Root(d3.create("svg"));  
    }
}

registerBrick('0183b60ef89aed40ac42', SVGRootConstructor);
