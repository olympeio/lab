import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3scaleSequentialSymlog extends Brick {

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
            d3.scaleSequentialSymlog()
            .domain(domain)
            .range(range)
        )
    }
}

registerBrick('0183e500893e3a99fa68', D3scaleSequentialSymlog);
