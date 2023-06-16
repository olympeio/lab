import { Brick, registerBrick } from 'olympe';

export default class ArrayConstructor extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} length
     * @param {function(Array)} setArray
     */
    update($, [length], [setArray]) {
        setArray(Array.from({length:length}));
    }
}

registerBrick('0183dae80108952e6198', ArrayConstructor);
