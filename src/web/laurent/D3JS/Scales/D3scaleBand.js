import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3scaleBand extends Brick {

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
            d3.scaleBand()
            .domain(domain)
            .range(range)
        )
    }
}

registerBrick('0183e4feb8a19c863ca3', D3scaleBand);
