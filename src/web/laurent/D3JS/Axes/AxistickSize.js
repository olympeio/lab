import { Brick, registerBrick } from 'olympe';

export default class AxistickSize extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} axis
     * @param {number} tickSize
     * @param {function(*)} setAxis
     */
    update($, [axis, tickSize], [setAxis]) {
        setAxis(axis.tickSize(tickSize));
    }
}

registerBrick('0187091b038aa2813457', AxistickSize);
