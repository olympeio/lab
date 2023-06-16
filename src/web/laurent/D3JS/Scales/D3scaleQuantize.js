import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3scaleQuantize extends Brick {

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
            d3.scaleQuantize()
            .domain(domain)
            .range(range)
        )
    }
}

registerBrick('0183e4ff890b26f93fa4', D3scaleQuantize);
