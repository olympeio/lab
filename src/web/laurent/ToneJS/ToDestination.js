import { Brick, registerBrick } from 'olympe';
import * as Tone from 'tone'

export default class ToDestination extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} synth
     * @param {function(*)} setSynth
     */
    update($, [synth], [setSynth]) {
        setSynth(synth.toDestination());
    }
}

registerBrick('01871db014e4930ba3c4', ToDestination);
