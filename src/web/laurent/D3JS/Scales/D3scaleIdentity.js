import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3scaleIdentity extends Brick {

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
            d3.scaleIdentity()
            .domain(domain)
            .range(range)
        )
    }
}

registerBrick('0183e500286f8e241b1a', D3scaleIdentity);
