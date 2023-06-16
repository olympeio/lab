import { Brick, registerBrick } from 'olympe';
import * as Tone from 'tone'

export default class SynthBuilder extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setSynth
     */
    update($, inputs, [setSynth]) {
        setSynth(Tone.Synth());
    }
}

registerBrick('01871dafac316a4fe86d', SynthBuilder);
