import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3zoom extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {d3.Selection} selection
     * @param {function(d3.Selection)} setSelection
     * @param {function(*)} setTransform
     * @param {function(number)} setX
     * @param {function(number)} setY
     * @param {function(number)} setK
     */
update($, [selection], [setSelection, setZoom, setTransform, setX, setY, setK]) {
        const zoomed = function(transform){
            //console.log(transform);
            setTransform(transform.transform);
            setX(transform.transform.x);
            setY(transform.transform.y);
            setK(transform.transform.k);
        }
        
        const zoom = d3.zoom().on("zoom", zoomed);
        selection.call(zoom)
            //this is usefull to trigger first "zoom" event and therefore easier to initialise
            .call(zoom.transform, d3.zoomIdentity);
        
        setSelection(selection); 
        setZoom(zoom);
    }
}

registerBrick('0183e0148070418e1784', D3zoom);
