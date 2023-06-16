import { Brick, registerBrick } from 'olympe';

export default class HandPoseTFAI extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {string} cameraSource
     * @param {!Array} outputs
     */
    update($, [cameraSource], outputs) {
        // Write your code here. You have to implement this method !
        // Executed every time an input gets updated., override `setupExecution()` to change the behavior.
    }
}

registerBrick('0188c33ea7a3f5c95589', HandPoseTFAI);
