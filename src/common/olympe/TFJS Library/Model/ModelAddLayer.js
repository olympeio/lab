import { Brick, registerBrick } from 'olympe';
import * as tf from '@tensorflow/tfjs';

export default class ModelAddLayer extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {tf.Sequential} sequentialModel
     * @param {tf.layers.Layer} layer
     * @param {function(*)} setSequentialModel
     */
    update($, [sequentialModel, layer], [setSequentialModel]) {
        sequentialModel.add(layer);
        setSequentialModel(sequentialModel);
    }
}

registerBrick('0183a79d511a6a8bb2af', ModelAddLayer);
