import { Brick, registerBrick } from 'olympe';
import * as tf from '@tensorflow/tfjs';

export default class TflayersflattenConstructor extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setFlattenLayer
     */
    update($, inputs, [setFlattenLayer]) {
        // Write your code here. You have to implement this method !
        // Executed every time an input gets updated., override `setupExecution()` to change the behavior.
        setFlattenLayer(tf.layers.flatten());
    }
}

registerBrick('0183b1f1700a74d55edb', TflayersflattenConstructor);
