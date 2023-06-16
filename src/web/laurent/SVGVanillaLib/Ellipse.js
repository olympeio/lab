import { Brick, registerBrick } from 'olympe';
import {combineLatest, of} from 'rxjs';

export default class Ellipse extends Brick {

    setupExecution($) {
        
        let ellipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
        return combineLatest([of(ellipse)].concat(this.getInputs().map((i) => $.observe(i))));
    }

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} cx
     * @param {number} cy
     * @param {number} rx
     * @param {number} ry
     * @param {Color} fill
     * @param {number} strokeWidth
     * @param {Color} stroke
     * @param {function(*)} setEllipse
     */
    update($, [ellipse, cx, cy, rx, ry, fill, strokeWidth, stroke], [setEllipse]) {
        ellipse.setAttribute('cx', cx);
        ellipse.setAttribute('cy', cy);
        ellipse.setAttribute('rx', rx);
        ellipse.setAttribute('ry', ry);
        ellipse.setAttribute('stroke-width', strokeWidth);
        ellipse.setAttribute('fill', "rgb("+fill.getRed()+","+fill.getGreen()+","+fill.getBlue()+")");
        ellipse.setAttribute('fill', "rgb("+stroke.getRed()+","+stroke.getGreen()+","+stroke.getBlue()+")");
        setEllipse(ellipse);
    
    }
}

registerBrick('018379e3d70f93cbd6fb', Ellipse);
