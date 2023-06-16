import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3transpose extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} array
     * @param {function(*)} setArray
     */
    update($, [array], [setArray]) {
        setArray(d3.transpose(array));
    }
}

registerBrick('018403859e1f3c8f8ee1', D3transpose);
