import { Brick, registerBrick } from 'olympe';
import * as tf from '@tensorflow/tfjs';

export default class TensorConstructor extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {string} array
     * @param {function(string)} setTftensor
     */
     update($, [array], [setTftensor]) {
        let JSONArray;
        try {
            JSONArray = JSON.parse(array)
        } catch{
            //make sure not to crash the engine if typing wrong
            return;
        }
        setTftensor(tf.tensor(JSONArray));
    }
}

registerBrick('0183a6c22a22dd407b5e', TensorConstructor);
