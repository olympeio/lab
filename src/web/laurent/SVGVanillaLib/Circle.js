import { Brick, registerBrick } from 'olympe';
import {combineLatest, of} from 'rxjs';

export default class Circle extends Brick {

    setupExecution($) {
        let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        return combineLatest([of(circle)].concat(this.getInputs().map((i) => $.observe(i))));
    }
    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} cx
     * @param {string} cy
     * @param {string} radius
     * @param {function(string)} setCircle
     */
    update($, [circle, cx, cy, radius, color], [setCircle]) {
        // Write your code here. You have to implement this method !
        // Executed every time an input gets updated., override `setupExecution()` to change the behavior.
        
        circle.setAttribute('cx', cx);
        circle.setAttribute('cy', cy);
        circle.setAttribute('r', radius);
        circle.setAttribute('fill', "rgb("+color.getRed()+","+color.getGreen()+","+color.getBlue()+")");
        
        setCircle(circle);

    }
}

registerBrick('018373bffae341d319e0', Circle);

