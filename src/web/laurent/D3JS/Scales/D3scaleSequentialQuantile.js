import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3scaleSequentialQuantile extends Brick {

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
            d3.scaleSequentialQuantile()
            .domain(domain)
            .range(range)
        )
    }
}

registerBrick('0183e50094ac913bad05', D3scaleSequentialQuantile);
