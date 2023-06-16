import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";
import { string } from 'mathjs';

export default class D3SelectionAttrAsObject extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {string} selection
     * @param {string} attrName
     * @param {string|function} attrValue
     * @param {function(d3.Selection)} setSelection
     */
    update($, [selection, attrName, attrValue], [setSelection]) {
        setSelection(selection.attr(attrName, JSON.parse(attrValue)));
    }
}

registerBrick('0183b60c69b5baef15dd', D3SelectionAttrAsObject);
