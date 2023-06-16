import { Brick, registerBrick } from 'olympe';

export default class SVGAnyConstructor extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {string} type
     * @param {function(d3.Selection)} setSelection
     */
    update($, [parent, type], [setSelection]) {
        setSelection(parent.append(type));
    }
}

registerBrick('0183cd9d1e76a2d8fea4', SVGAnyConstructor);
