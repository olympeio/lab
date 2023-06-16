import { VisualBrick, registerBrick } from 'olympe';
import * as d3 from "d3";
import { avgPool } from '@tensorflow/tfjs-core';
import {combineLatest} from 'rxjs';

export default class D3JSSVGContainer extends VisualBrick {

    setupExecution($) {
        return combineLatest([$.observe('svgd3Container')]);
    }

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array<*>} properties
     * @return {Element}
     */
    render($, [d3container]) {
        // Write your code here. You have to implement this method !
        // This method returns the rendered element that is attached to its parent with the overridable method `updateParent()`.
        // Executed only once by default, override `setupExecution()` to change the behavior and control the `properties` parameter.
        
        return d3container.node();
          
    }
}

registerBrick('0183b3ef6b811ec655a0', D3JSSVGContainer);
