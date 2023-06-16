import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3scaleDiverging extends Brick {

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
            d3.scaleDiverging()
            .domain(domain)
            .range(range)
        )
    }
}

registerBrick('0183e500a0d66c9ca9c9', D3scaleDiverging);
