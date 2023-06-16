import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3scaleUtc extends Brick {

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
            d3.scaleUtc()
            .domain(domain)
            .range(range)
        )
    }
}

registerBrick('0183e5004d238c3168be', D3scaleUtc);
