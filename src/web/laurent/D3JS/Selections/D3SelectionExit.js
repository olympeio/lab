import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3SelectionExit extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} selection
     * @param {function(*)} setSelection
     */
    update($, [selection], [setSelection]) {
        setSelection(selection.exit());
    }
}

registerBrick('01855ebd8d3871917765', D3SelectionExit);
