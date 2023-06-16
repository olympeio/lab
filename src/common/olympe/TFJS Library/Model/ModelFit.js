import { Brick, registerBrick } from 'olympe';
import * as tf from '@tensorflow/tfjs';

export default class ModelFit extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {tf.Model} model
     * @param {tf.Tensor} inputs    
     * @param {tf.Tensor} labels
     * @param {number} batchSize
     * @param {number} epochs
     * @param {function(tf.Model)} setModel
     * @param {function(number)} setEpochs
     * @param {function(number)} setCurrentEpoch
     * @param {function(Object)} setHistory
     */
    async update($, [model, inputs, labels, batchSize, epochs], [setModel, setEpochs, setCurrentEpoch, setHistory]) {
        // Write your code here. You have to implement this method !
        // Executed every time an input gets updated., override `setupExecution()` to change the behavior.
        //
        //console.log('model fit', model, inputs.print(), labels.print());
        
        setEpochs(epochs);

        const onBatchBegin = function(batch,args){
            //console.log('batch',batch, args);
        }
        const onEpochBegin = function(epoch,args){
            //console.log('epoch',epoch,args);
            setCurrentEpoch(epoch);
        }
        const Tm = await model.fit(inputs, labels, {
            batchSize,
            epochs,
            callbacks: {
                onEpochBegin: onEpochBegin,
                onBatchBegin: onBatchBegin
            }
          });
        
        setModel(model);
        setHistory(Tm);
    }
}

registerBrick('0183aebe7dd4c672d1f9', ModelFit);
