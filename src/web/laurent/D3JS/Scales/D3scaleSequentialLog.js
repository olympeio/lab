import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3scaleSequentialLog extends Brick {

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
            d3.scaleSequentialLog()
            .domain(domain)
            .range(range)
        )
    }
}

registerBrick('0183e5006519a8c31817', D3scaleSequentialLog);
