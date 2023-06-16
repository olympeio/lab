import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3scaleRadial extends Brick {

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
            d3.scaleRadial()
            .domain(domain)
            .range(range)
        )
    }
}

registerBrick('0183e500352ab691f5e0', D3scaleRadial);
