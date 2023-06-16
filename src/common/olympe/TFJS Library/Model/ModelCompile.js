import { Brick, registerBrick } from 'olympe';
import * as tf from '@tensorflow/tfjs';

export default class ModelCompile extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} sequentialModel
     * @param {*} loss
     * @param {tf.train.Optimizer} optimizer
     * @param {!Array} outputs
     */
    update($, [sequentialModel, loss, optimizer], [setSeqModel]) {
        //console.log(loss, optimizer);
        sequentialModel.compile({loss: loss, optimizer: optimizer});
        setSeqModel(sequentialModel);
    }
}

registerBrick('0183ac7df8bc45146ee7', ModelCompile);
