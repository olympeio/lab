import { ActionBrick, registerBrick } from 'olympe';
import * as Tone from 'tone'

export default class TEST extends ActionBrick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function()} forwardEvent
     * @param {function(*)} setSynth
     */
    update($, inputs, [forwardEvent, setSynth]) {
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("C4", "8n");
        setSynth(synth);
    }
}

registerBrick('01871df5a55af3291cad', TEST);
