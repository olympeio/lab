import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class ChordGenerator extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {Matrix2} data
     * @param {number} padAngle
     * @param {function(Array)} setData
     * @param {function(d3.Selection)} setGroups
     */
    update($, [data, padAngle], [setData, setGroups]) {
        const chord = d3.chord()
            .padAngle(padAngle)
            .sortSubgroups(d3.descending)
            .sortChords(d3.descending);
    
        const chords = chord(data);
        
        setData(chords);
        setGroups(chords.groups);
    }
}

registerBrick('0183b641656a1d57946c', ChordGenerator);
