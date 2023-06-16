import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3sum extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} numbers
     * @param {function(number)} setSum
     */
    update($, [numbers], [setSum]) {
        setSum(d3.sum(numbers));
    }
}

registerBrick('0183be23164e248304e1', D3sum);
