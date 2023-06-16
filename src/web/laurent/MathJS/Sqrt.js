import { Brick, registerBrick } from 'olympe';
import * as MATH from 'mathjs'
export default class Sqrt extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} a
     * @param {function(number)} setA12
     */
    update($, [a], [setA12]) {
        // Write your code here. You have to implement this method !
        // Executed every time an input gets updated., override `setupExecution()` to change the behavior.
        setA12(MATH.sqrt(a));
    }
}

registerBrick('01838e8b178921b03a0a', Sqrt);
