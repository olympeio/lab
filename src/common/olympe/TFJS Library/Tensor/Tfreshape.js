import { Brick, registerBrick } from 'olympe';
import * as tf from '@tensorflow/tfjs';

export default class Tfreshape extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} tensor
     * @param {string} newShape
     * @param {function(*)} setReshapedTensor
     */
    update($, [tensor, newShape], [setReshapedTensor]) {
        setReshapedTensor(tf.reshape(tensor, JSON.parse(newShape)));
    }
}

registerBrick('0183b233f062f8679a1e', Tfreshape);
