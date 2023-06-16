import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3scaleDivergingPow extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} domain
     * @param {*} range
     * @param {function(*)} setScale
     */
    update($, [domain, range], [setScale]) {
        setScale(
            d3.scaleDivergingPow()
            .domain(domain)
            .range(range)
        )
    }
}

registerBrick('0183e4ffb8e909be4ec8', D3scaleDivergingPow);
