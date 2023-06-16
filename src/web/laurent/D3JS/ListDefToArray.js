import { Brick, registerBrick } from 'olympe';
import {combineLatest} from 'rxjs';

export default class ListDefToArray extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {ListDef} data
     * @param {*} options
     * @param {!Brick} iterator
     * @param {function(*)} setD3jsData
     */
    update($, [data, options, iterator], [setD3jsData]) {
        //TODO make sur the options is optional!
        var toto = this.process($, data, options, iterator);
        toto.subscribe(setD3jsData);
    }

    /**
     * @private
     * @param {!BrickContext} $
     * @param {!Array} data
     * @param {!Brick} iterator
     * @return {!Promise<!Array<*>>}
     */
    process($, data, options, iterator) {
        const [itemInput$, rankInput$, listInput$, options$] = iterator.getInputs();
        const [itemOutput$] = iterator.getOutputs();
        
        //map of observables
        const toObservable = (item, rank) => {
            const mapper$ = $.runner(iterator)
                .set(itemInput$, item)
                .set(rankInput$, rank)
                .set(options$, options)
            return mapper$.observe(itemOutput$)
        };

        //map of observables => observable map
        // combineLatest from rxjs on map of observables
        return combineLatest(data.map(toObservable));
    
        
    }
}

registerBrick('01843933c444e764e357', ListDefToArray);
