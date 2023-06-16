import { Brick, registerBrick } from 'olympe';

export default class D3SelectionAttrAsString extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {d3.Selection} selection
     * @param {string} attrName
     * @param {string} attrValue
     * @param {function(d3.Selection)} setSelection
     */
    update($, [selection, attrName, attrValue], [setSelection]) {
        setSelection(selection.attr(attrName, attrValue));
    }
}

registerBrick('0183d0806de5d9e8417b', D3SelectionAttrAsString);
