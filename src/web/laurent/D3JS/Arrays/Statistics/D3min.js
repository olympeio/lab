import { Brick, registerBrick } from 'olympe';

export default class D3min extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {Array} array
     * @param {function(number)} setMin
     */
    update($, [array], [setMin]) {
        setMin(d3.min(array))
    }
}

registerBrick('01842f32f824c7a43b69', D3min);
