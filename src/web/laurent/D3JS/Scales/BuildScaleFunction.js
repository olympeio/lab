import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class BuildScaleFunction extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} domain
     * @param {*} range
     * @param {*} scaleType
     * @param {function(*)} setScaleFunction
     */
    update($, [domain, range, scaleType], [setScaleFunction]) {
        switch(scaleType){
            case('Identity'):
                setScaleFunction(d3.scaleIdentity().domain(domain).range(range));
                break;
            case('Linear'):
                setScaleFunction(d3.scaleLinear().domain(domain).range(range));
                break;
            case('Log'):
                setScaleFunction(d3.scaleLog().domain(domain).range(range));
                break;
            case('Pow'):
                setScaleFunction(d3.scalePow().domain(domain).range(range));
                break;
            case('Radial'):
                setScaleFunction(d3.scaleRadial().domain(domain).range(range));
                break;
            case('Sqrt'):
                setScaleFunction(d3.scaleSqrt().domain(domain).range(range));
                break;
            case('Symlog'):
                setScaleFunction(d3.scaleSymlog().domain(domain).range(range));
                break;
            case('Time'):
                setScaleFunction(d3.scaleTime().domain(domain).range(range));
                break;
            case('Utc'):
                setScaleFunction(d3.scaleUtc().domain(domain).range(range));
                break;
        }
    }
}

registerBrick('0186fffe32820cd857dd', BuildScaleFunction);
