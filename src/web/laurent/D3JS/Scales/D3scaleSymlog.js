import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3scaleSymlog extends Brick {

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
            d3.scaleSymlog()
            .domain(domain)
            .range(range)
        )
    }
}

registerBrick('0183e5001b25475377a1', D3scaleSymlog);
