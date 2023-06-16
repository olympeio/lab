import { Brick, registerBrick } from 'olympe';
import * as tf from '@tensorflow/tfjs';

export default class Tflayersconv2dConstructor extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} kernelSize
     * @param {number} filters
     * @param {number} strides
     * @param {*} activation
     * @param {*} kernelInitializer
     * @param {function(*)} setConv2dLayer
     */
    update($, [kernelSize, filters, strides, activation, kernelInitializer], [setConv2dLayer]) {
        // Write your code here. You have to implement this method !
        // Executed every time an input gets updated., override `setupExecution()` to change the behavior.

        setConv2dLayer(tf.layers.conv2d({
            kernelSize: kernelSize,
            filters: filters,
            strides: strides,
            activation: activation,
            kernelInitializer: kernelInitializer
          }
        ));
    }
}

registerBrick('0183b1c46525eefe8dd4', Tflayersconv2dConstructor);
