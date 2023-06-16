import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class SVGGroupConstructor extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {d3.Selection} parent
     * @param {function(d3.Selection)} setGroup
     */
    update($, [parent], [setGroup]) {
        setGroup(parent.append("g"))
    }
}

registerBrick('0183b6158ee4b7cb462f', SVGGroupConstructor);
