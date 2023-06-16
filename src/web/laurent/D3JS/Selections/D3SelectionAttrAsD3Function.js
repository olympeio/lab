import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3SelectionAttrAsD3Function extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {d3.Selection} selection
     * @param {string} attrName
     * @param {function} attrFunction
     * @param {function(d3.Selection)} setSelection
     */
    update($, [selection, attrName, attrFunction], [setSelection]) {
        //console.log(selection, attrName, attrFunction);
        setSelection(selection.attr(attrName, attrFunction));
    }
}

registerBrick('0183d1af860b7b341742', D3SelectionAttrAsD3Function);
