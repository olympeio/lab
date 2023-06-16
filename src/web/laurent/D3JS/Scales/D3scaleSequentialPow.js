import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3scaleSequentialPow extends Brick {

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
            d3.scaleSequentialPow()
            .domain(domain)
            .range(range)
        )
    }
}

registerBrick('0183e50071d468dbc6a9', D3scaleSequentialPow);
