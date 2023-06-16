import { Brick, registerBrick } from 'olympe';
import * as tf from '@tensorflow/tfjs';

export default class TflayersmaxPooling2dConstructor extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {string} poolSize
     * @param {string} strides
     * @param {function(*)} setMaxPooling2dLayer
     */
    update($, [poolSize, strides], [setMaxPooling2dLayer]) {
        // Write your code here. You have to implement this method !
        // Executed every time an input gets updated., override `setupExecution()` to change the behavior.

        setMaxPooling2dLayer(tf.layers.maxPooling2d(
            {
                poolSize: JSON.parse(poolSize), 
                strides: JSON.parse(strides)
            }
        ));
    }
}

registerBrick('0183b1d132a3977cb41b', TflayersmaxPooling2dConstructor);
