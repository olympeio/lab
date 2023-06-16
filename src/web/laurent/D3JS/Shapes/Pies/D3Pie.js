import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3Pie extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} padAngle
     * @param {Array} data
     * @param {function(string)} setPie
     */
    update($, [padAngle, data], [setPie]) {
        //data = [4,9,6,8,1];
        const pie = d3.pie()
            //.sortValues(sortValues)
            //.startAngle(startAngle)
            //.endAngle(endAngle)
            .padAngle(padAngle)
        setPie(pie(data));
    }
}

registerBrick('01842559c5c3f752f27d', D3Pie);
