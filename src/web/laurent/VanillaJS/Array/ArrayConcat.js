import { Brick, registerBrick } from 'olympe';

export default class ArrayConcat extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {Array} array1
     * @param {Array} array2
     * @param {function(Array)} setOutputArray
     */
    update($, [array1, array2], [setOutputArray]) {
        setOutputArray(array1.concat(array2));
    }
}

registerBrick('0183dc43142bcc016275', ArrayConcat);
