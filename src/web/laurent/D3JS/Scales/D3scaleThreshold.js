import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3scaleThreshold extends Brick {

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
            d3.scaleThreshold()
            .domain(domain)
            .range(range)
        )
    }
}

registerBrick('0183e4ff6f98b6e6a946', D3scaleThreshold);
