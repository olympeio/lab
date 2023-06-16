import { Brick, registerBrick } from 'olympe';

export default class D3transition extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} selection
     * @param {function(*)} setSelection
     */
    update($, [selection], [setSelection]) {
        setSelection(selection.transition().duration(1500));
    }
}

registerBrick('01841514207d9acbfd1f', D3transition);
