import { Brick, registerBrick } from 'olympe';

export default class Path extends Brick {

    setupExecution($) {
        let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        return combineLatest([of(path)].concat(this.getInputs().map((i) => $.observe(i))));
    }


    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {string} m
     * @param {function(*)} setPath
     */
    update($, [path, m], [setPath]) {
        path.setAttribute('M', m);
        setPath(path); 
    }
}

registerBrick('0185722fa0d9c3fe980d', Path);
