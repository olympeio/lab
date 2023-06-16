import { Brick, registerBrick } from 'olympe';

export default class SVGRoot extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setSVGRoot
     */
    update($, inputs, [setSVGRoot]) {
        // Write your code here. You have to implement this method !
        // Executed every time an input gets updated., override `setupExecution()` to change the behavior.
        let ns = "http://www.w3.org/2000/svg";
        let svg = document.createElementNS(ns, "svg");

        setSVGRoot(svg);
    }
}

registerBrick('018378ce9716ebffc1dc', SVGRoot);
