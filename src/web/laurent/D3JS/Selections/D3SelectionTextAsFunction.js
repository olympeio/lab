import { Brick, registerBrick } from 'olympe';

export default class D3SelectionTextAsFunction extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {d3.Selection} selection
     * @param {Brick} textGeneratorFunction
     * @param {function(d3.Selection)} setSelection
     */
    update($, [selection, textGeneratorFunction], [setSelection]) {
        var proc = function(){
            return $.runner(textGeneratorFunction)
                .set()
                .set()
                .get()    
        }
        
        setSelection(selection.text(proc));
    }
}

registerBrick('0183d1c06388eb6ce1c6', D3SelectionTextAsFunction);
