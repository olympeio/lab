import { Brick, registerBrick } from 'olympe';

export default class ArraySet extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {Array} array
     * @param {number} rank
     * @param {string} value
     * @param {function(*)} setArray
     */
    update($, [array, rank, value], [setArray]) {
        array[rank] = value
        //as we are in function mode (and not action) make sure we trigger a new object 
        setArray([].concat(array));
    }
}

registerBrick('0183dc257d8cf6334dfa', ArraySet);
