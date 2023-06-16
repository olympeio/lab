import { TFHUB_SEARCH_PARAM } from '@tensorflow/tfjs-converter/dist/executor/graph_model';
import { Brick, registerBrick } from 'olympe';
import * as tf from '@tensorflow/tfjs';

export default class ModelConstructor extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setSequentialModel
     */
     update($, inputs, [setSequentialModel]) {
        // Write your code here. You have to implement this method !
        // Executed every time an input gets updated., override `setupExecution()` to change the behavior.

        setSequentialModel(tf.sequential());
    }
}

registerBrick('0183a794bdad538bab1a', ModelConstructor);
