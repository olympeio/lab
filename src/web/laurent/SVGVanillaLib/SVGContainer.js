import { VisualBrick, registerBrick } from 'olympe';
import {combineLatest} from 'rxjs';

export default class SVGContainer extends VisualBrick {
    
    setupExecution($) {
        return combineLatest([$.observe('SVGcontent')]);
    }

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array<*>} properties
     * @return {Element}
     */
    render($, [svg]) {
        function resizeContainer([w, h]){
            svg.setAttribute("width", w);
            svg.setAttribute("height", h);
        }
        combineLatest($.observe('Width'), $.observe('Height')).subscribe(resizeContainer);
        
        return svg;
    }
}

registerBrick('018373af05d9f8f8b2ca', SVGContainer);
