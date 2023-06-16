import { Brick, registerBrick } from 'olympe';
import * as tf from '@tensorflow/tfjs';


export default class Tflinspace extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} start
     * @param {number} stop
     * @param {number} num
     * @param {function(*)} setTensor
     */
    update($, [start, stop, num], [setTensor]) {
        setTensor(tf.linspace(start, stop, num));
    }
}

registerBrick('0183b1aefa319dd689af', Tflinspace);
