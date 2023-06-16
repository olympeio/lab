import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3SelectionAttrAsFunction extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {d3.Selection} selection
     * @param {string} attribute
     * @param {!Brick} valueFunction
     * @param {function(d3.Selection)} setSelection
     */
    update($, [selection, attribute, valueFunction, options], [setSelection]) {

        //fetching the input and outputs of the signature 
        const [data$, index$, nodes$, options$] = valueFunction.getInputs();
        const [value$] = valueFunction.getOutputs()

        //relaying the arguments to the softcoded function
        
        selection.attr(attribute, (data,index,nodes) => {
            //console.log('titi');
            const ctx = $.runner(valueFunction)
                .set(data$, data)
                .set(index$, index)
                .set(nodes$, nodes)
                .set(options$, options);
            const result = ctx.get(value$);
            ctx.destroy();    
            return result;
        })

        setSelection(selection);
    }
}

registerBrick('0183b86741c211226038', D3SelectionAttrAsFunction);
