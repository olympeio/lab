import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3scaleTime extends Brick {

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
            d3.scaleTime()
            .domain(domain)
            .range(range)
        )
    }
}

registerBrick('0183e50040b4187fb9df', D3scaleTime);
