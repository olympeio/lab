import { Brick, registerBrick } from 'olympe';

export default class SVGElementConstructor extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} parent
     * @param {string} type
     * @param {function(*)} setParent
     * @param {function(*)} setChild
     */
    update($, [parent, type], [setParent, setChild]) {
        // Write your code here. You have to implement this method !
        // Executed every time an input gets updated., override `setupExecution()` to change the behavior.
        setChild(parent.append(type));
        setParent(parent);
    }
}

registerBrick('0183b891d784b54fa46f', SVGElementConstructor);
