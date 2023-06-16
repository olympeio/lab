import { Brick, registerBrick } from 'olympe';

export default class D3SelectionTextAsString extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {d3.Selection} d3Selector
     * @param {string} text
     * @param {function(d3.Selection)} setSelection
     */
    update($, [d3Selector, text], [setSelection]) {
        setSelection(d3Selector.text(text));
    }
}

registerBrick('0183b896b01d39480bd4', D3SelectionTextAsString);
