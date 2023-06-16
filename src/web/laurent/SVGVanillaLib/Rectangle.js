import { Brick, registerBrick } from 'olympe';
import {combineLatest, of} from 'rxjs';

export default class Rectangle extends Brick {

    setupExecution($) {
        
        let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        return combineLatest([of(rect)].concat(this.getInputs().map((i) => $.observe(i))));
    }

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {number} rx
     * @param {number} ry
     * @param {Color} fill
     * @param {number} strokeWidth
     * @param {Color} stroke
     * @param {function(*)} setRectangle
     */
    update($, [rect, x, y, width, height, rx, ry, fill, strokeWidth, stroke], [setRectangle]) {
        rect.setAttribute('x', x);
        rect.setAttribute('y', y);
        rect.setAttribute('width', width);
        rect.setAttribute('height', height);
        rect.setAttribute('rx', rx);
        rect.setAttribute('ry', ry);
        rect.setAttribute('fill', "rgb("+fill.getRed()+","+fill.getGreen()+","+fill.getBlue()+")");
        rect.setAttribute('stroke-width', strokeWidth);
        rect.setAttribute('stroke', "rgb("+stroke.getRed()+","+stroke.getGreen()+","+stroke.getBlue()+")");
        
        
        console.log('rect', rect);
        setRectangle(rect);
    }
}

registerBrick('0183790146273b0ddd18', Rectangle);
