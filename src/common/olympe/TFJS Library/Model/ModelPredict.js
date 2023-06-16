import { Brick, registerBrick } from 'olympe';
import * as tf from '@tensorflow/tfjs';

export default class ModelPredict extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} model
     * @param {*} inputSample
     * @param {function(*)} setPrediction
     */
    update($, [model, inputSample], [setPrediction]) {
        // Write your code here. You have to implement this method !
        // Executed every time an input gets updated., override `setupExecution()` to change the behavior.
        //console.log(model, JSON.parse(inputSample));
        //model.predict(tf.tensor(JSON.parse(inputSample), [1,1])).print();
        setPrediction(
            model.predict(
                inputSample
                ,
                {
                    batchSize: 1,
                    verbose: false
                }
            )
        );
    }
}

registerBrick('0183aee488b85beb50a6', ModelPredict);
