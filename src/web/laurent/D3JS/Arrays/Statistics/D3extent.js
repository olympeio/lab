import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3extent extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} array
     * @param {function(*)} setMinmax
     */
    update($, [array], [setMinmax]) {
        //console.log('d3Extent array', array);
        var extent = d3.extent(array);
        //console.log('d3Extent extent', extent);
        setMinmax(extent);
    }
}

registerBrick('0183f4313564702e706e', D3extent);
