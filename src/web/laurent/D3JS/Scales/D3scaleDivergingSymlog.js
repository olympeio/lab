import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3scaleDivergingSymlog extends Brick {

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
            d3.scaleDivergingSymlog()
            .domain(domain)
            .range(range)
        )
    }
}

registerBrick('0183e4ff9ce131bdc947', D3scaleDivergingSymlog);
