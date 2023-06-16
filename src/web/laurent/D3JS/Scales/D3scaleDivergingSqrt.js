import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3scaleDivergingSqrt extends Brick {

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
            d3.scaleDivergingSqrt()
            .domain(domain)
            .range(range)
        )
    }
}

registerBrick('0183e4ffac68e1eb5515', D3scaleDivergingSqrt);
