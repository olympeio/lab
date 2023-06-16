import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";


export default class RibbonGenerator extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} radius
     * @param {number} padAngle
     * @param {function(*)} setD3Ribbon
     */
    update($, [radius, padAngle], [setD3Ribbon]) {
        const ribbon = d3.ribbon()
            .radius(radius)
            .padAngle(padAngle);
        //console.log('titi',ribbon);
        setD3Ribbon(ribbon);
    }
}

registerBrick('0183b6696002458abbf5', RibbonGenerator);
