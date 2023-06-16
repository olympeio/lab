import { Brick, registerBrick } from 'olympe';

export default class Arraylength extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} array
     * @param {function(*)} setArray
     * @param {function(number)} setLength
     */
    update($, [array], [setArray, setLength]) {
        setArray(array);
        setLength(array.length);
    }
}

registerBrick('0183f950fa4a88f4f535', Arraylength);
