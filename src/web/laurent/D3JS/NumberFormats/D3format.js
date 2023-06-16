import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";


export default class D3format extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {string} format
     * @param {function(*)} setFormatFunction
     */
     update($, [format], [setFormatFunction]) {
        setFormatFunction(d3.format(format));
    }
}

registerBrick('0183cdafb78f0be063ac', D3format);
