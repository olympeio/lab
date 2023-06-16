import { Brick, registerBrick } from 'olympe';
import * as Tone from 'tone'

export default class TriggerAttackRelease extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} synth
     * @param {string} note
     * @param {string} duration
     * @param {!Array} outputs
     */
    update($, [synth, note, duration], outputs) {
        synth.triggerAttackRelease(note, duration);
    }
}

registerBrick('01871db031a79224af1b', TriggerAttackRelease);
