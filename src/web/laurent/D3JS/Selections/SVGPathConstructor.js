import { Brick, registerBrick } from 'olympe';

export default class SVGPathConstructor extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {d3.Selection} parent
     * @param {function(d3.Selection)} setPath
     */
    update($, [parent], [setPath]) {
        // Write your code here. You have to implement this method !
        // Executed every time an input gets updated., override `setupExecution()` to change the behavior.
        setPath(parent.append('path'));
    }
}

registerBrick('0183b69533075e647622', SVGPathConstructor);
