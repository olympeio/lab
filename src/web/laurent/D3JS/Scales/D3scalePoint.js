import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3scalePoint extends Brick {

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
            d3.scalePoint()
            .domain(domain)
            .range(range)
        )
    }
}

registerBrick('0183e4ff631ebec5e8b1', D3scalePoint);
