import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";


export default class D3stack extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {Array} keys
     * @param {Array} data
     * @param {*} offset
     * @param {*} order
     * @param {function(*)} setStack
     */
    update($, [keys, data, offset, order], [setStack]) {
        const stack = d3.stack()
        .keys(keys)
        //.value(value)
        .order(order)
        .offset(offset)

        setStack(stack(data));
    }
}

registerBrick('0183fc09c246edd4c961', D3stack);
