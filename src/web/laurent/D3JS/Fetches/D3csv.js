import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3csv extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {string} url
     * @param {*} accessor
     * @param {function(*)} setData
     */
    update($, [url, accessor], [setData]) {
        d3.csv(url).then((data)=>{
            setData(data);
        })
    }
}

registerBrick('0183f1f16ed9153aafaf', D3csv);
