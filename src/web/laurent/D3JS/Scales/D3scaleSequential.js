import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3scaleSequential extends Brick {

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
            d3.scaleSequential()
            .domain(domain)
            .range(range)
        )
    }
}

registerBrick('0183e50058baa84fe0aa', D3scaleSequential);
