import { Brick, registerBrick } from 'olympe';

export default class D3SelectionRemove extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} selection
     * @param {function(*)} setSelection
     */
    update($, [selection], [setSelection]) {
        setSelection(selection.remove());
    }
}

registerBrick('01855ec04c0a7bd5fd87', D3SelectionRemove);
