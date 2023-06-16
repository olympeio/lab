import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3scaleSqrt extends Brick {

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
            d3.scaleSqrt()
            .domain(domain)
            .range(range)
        )
    }
}

registerBrick('0183e4fff8b88c2939a1', D3scaleSqrt);
