import { Brick, registerBrick } from 'olympe';

export default class ArrayFlat extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {Array} array
     * @param {function(*)} setArray
     */
    update($, [array], [setArray]) {
        setArray(array.flat());
    }
}

registerBrick('0183be25ad35e9ea0b51', ArrayFlat);
