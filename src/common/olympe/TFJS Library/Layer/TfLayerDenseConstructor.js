import { Brick, registerBrick } from 'olympe';
import * as tf from '@tensorflow/tfjs';

export default class TfLayerDenseConstructor extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} units
     * @param {*} activation
     * @param {string} inputShape
     * @param {function(*)} setDenseLayer
     */
    update($, [units, activation, inputShape], [setDenseLayer]) {
        // Write your code here. You have to implement this method !
        // Executed every time an input gets updated., override `setupExecution()` to change the behavior.
        //console.log(units, activation, inputShape);
        setDenseLayer(tf.layers.dense(
            {
                units: units, 
                activation: activation,
                inputShape: JSON.parse(inputShape)
            })
        );
    }
}

registerBrick('0183ac6f20f26079f624', TfLayerDenseConstructor);
