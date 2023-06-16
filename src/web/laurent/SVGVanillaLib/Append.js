import { Brick, registerBrick } from 'olympe';

export default class Append extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {string} svgParent
     * @param {string} svgChild
     * @param {!Array} outputs
     */
    update($, [svgParent, svgChild], outputs) {
        // Write your code here. You have to implement this method !
        // Executed every time an input gets updated., override `setupExecution()` to change the behavior.
        svgParent.appendChild(svgChild);
    }
}

registerBrick('018373c95ebb81cfa072', Append);
