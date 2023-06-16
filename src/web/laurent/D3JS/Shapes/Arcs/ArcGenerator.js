import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";


export default class ArcGenerator extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} innerRadius
     * @param {string} outerRadius
     * @param {function(*)} setD3Arc
     */
    update($, [innerRadius, outerRadius, cornerRadius, padAngle, padRadius], [setD3Arc]) {
        const arc = d3.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius)
            .cornerRadius(cornerRadius)
            .padAngle(padAngle)
            .padRadius(padRadius)
            //.startAngle(startAngle) //typically set from data
            //.endAngle(endAngle) //typically set from data

        setD3Arc(arc);
    }
}

registerBrick('0183b6689f483ff9ada3', ArcGenerator);
