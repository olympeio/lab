import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3scaleOrdinal extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {Array} domain
     * @param {Array} range
     * @param {function(Number)} setScaleOrdinal
     */
    update($, [domain, range], [setScaleOrdinal]) {
        setScaleOrdinal(
            d3.scaleLinear()
                .domain(domain)
                .range(range)
        );
    }
}

registerBrick('0183dc82e90f65868fe6', D3scaleOrdinal);
