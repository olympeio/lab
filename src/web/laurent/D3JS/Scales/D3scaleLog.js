import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3scaleLog extends Brick {

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
            d3.scaleLog()
            .domain(domain)
            .range(range)
        )
    }
}

registerBrick('0183e50007c889a0aa4c', D3scaleLog);
