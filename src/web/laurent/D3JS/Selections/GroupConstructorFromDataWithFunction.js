import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class GroupConstructorFromDataWithFunction extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {d3.Selection} parent
     * @param {Brick} function$
     * @param {function(d3.Selection)} setSelection
     */
    update($, [parent, function$], [setSelection]) {

        //fetching the input and outputs of the signature 
        const [data$, index$, nodes$] = function$.getInputs();
        const [value$] = function$.getOutputs();

        const proc = function(data,index,nodes){
            //console.log('$',$);
            return $.runner(function$)
                .set(data$, data)
                .set(index$, index)
                .set(nodes$, nodes)
                .get(value$)
        };

        setSelection(parent.selectAll("g")
                .data(proc)
                .join("g")
        );


    }
}

registerBrick('0183b9dd88c787a3a00f', GroupConstructorFromDataWithFunction);
