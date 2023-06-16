import { Brick, registerBrick } from 'olympe';

export default class D3max extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} array
     * @param {function(number)} setMax
     */
    update($, [array], [setMax]) {
        setMax(d3.max(array));
    }
}

registerBrick('01842f3307c85897bd74', D3max);
