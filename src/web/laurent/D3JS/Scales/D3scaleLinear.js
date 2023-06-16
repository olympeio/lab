import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3scaleLinear extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {Array} domain
     * @param {Array} range
     * @param {function(*)} setScale
     */
    update($, [domain, range], [setScale]) {
        setScale(
            d3.scaleLinear()
            .domain(domain)
            .range(range)
        )
    }
}

registerBrick('0183dc50304aa09cf619', D3scaleLinear);
