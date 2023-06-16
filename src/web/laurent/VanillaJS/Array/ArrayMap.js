import { Brick, registerBrick } from 'olympe';

export default class ArrayMap extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {Array} array
     * @param {!Brick} mapper
     * @param {function(*)} setMappedArray
     */
    update($, [array, mapper, config], [setMappedArray]) {
        //TODO make sur the config is optional!
        setMappedArray(this.process($, array, mapper, config));
    }

    /**
     * @private
     * @param {!BrickContext} $
     * @param {!Array} array
     * @param {!Brick} mapper
     * @return {!Promise<!Array<*>>}
     */
    process($, array, mapper, config) {
        const [itemInput$, rankInput$, config$] = mapper.getInputs();
        const [itemOutput$] = mapper.getOutputs();

        const map = (item, rank, array) => {
            const mapper$ = $.runner(mapper)
                .set(itemInput$, item)
                .set(rankInput$, rank)
                .set(config$, config)
            return mapper$.get(itemOutput$)
        };
    

        const mappedArray = [];
        for (let i = 0, l = array.length; i < l; i++) {
            mappedArray.push(map(array[i], i, array));
        }
        return mappedArray;
    }

}

registerBrick('0183be28175575f5113e', ArrayMap);
