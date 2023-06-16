import { Brick, registerBrick } from 'olympe';
import * as tf from '@tensorflow/tfjs';

export default class TensorPrint extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} tensor
     * @param {!Array} outputs
     */
    update($, [tensor], [setTensorAsString, setTensor]) {
        setTensorAsString(tensor.toString());
        setTensor(tensor);
    }
}

registerBrick('0183aee8e339de0e1e08', TensorPrint);
