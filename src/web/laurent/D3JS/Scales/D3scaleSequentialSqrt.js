import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3scaleSequentialSqrt extends Brick {

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
            d3.scaleSequentialSqrt()
            .domain(domain)
            .range(range)
        )
    }
}

registerBrick('0183e5007d814ba99740', D3scaleSequentialSqrt);
