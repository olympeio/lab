import { Brick, registerBrick } from 'olympe';
import {combineLatest, of} from 'rxjs';

export default class Line extends Brick {

    setupExecution($) {
        
        let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        return combineLatest([of(line)].concat(this.getInputs().map((i) => $.observe(i))));
    }

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} x1
     * @param {number} y1
     * @param {number} x2
     * @param {number} y2
     * @param {Color} color
     * @param {number} strokeWidth
     * @param {Color} stroke
     * @param {function(*)} setLine
     */
    update($, [line, x1, y1, x2, y2, fill, strokeWidth, stroke], [setLine]) {
        line.setAttribute('x1', x1);
        line.setAttribute('y1', y1);
        line.setAttribute('x2', x2);
        line.setAttribute('y2', y2);
        line.setAttribute('fill', "rgb("+fill.getRed()+","+fill.getGreen()+","+fill.getBlue()+")");
        line.setAttribute('stroke-width', strokeWidth);
        line.setAttribute('stroke', "rgb("+stroke.getRed()+","+stroke.getGreen()+","+stroke.getBlue()+")");
        
        
        console.log('line', line);
        setLine(line);
   
    }
}

registerBrick('018379e40006dcebf2d6', Line);
