import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3scalePow extends Brick {

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
            d3.scalePow()
            .domain(domain)
            .range(range)
        )
    }
}

registerBrick('0183e4ffd6c4a1542dfd', D3scalePow);
