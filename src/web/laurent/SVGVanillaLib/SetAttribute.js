import { Brick, registerBrick } from 'olympe';

export default class SetAttribute extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} element
     * @param {string} name
     * @param {string} value
     * @param {function(*)} setElement
     */
    update($, [element, name, value], [setElement]) {
        element.setAttribute(name, value);
        setElement(element);
    }
}

registerBrick('018571e7b35c26205476', SetAttribute);
