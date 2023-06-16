import { Brick, registerBrick } from 'olympe';

export default class DodecahedronGeometryConstructor extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} radius
     * @param {number} detail
     * @param {function(*)} setDodecahedronGeometry
     */
    update($, [radius, detail], [setDodecahedronGeometry]) {
        setDodecahedronGeometry(new THREE.DodecahedronGeometry(radius, detail));
    }
}

registerBrick('018737122654a02e01de', DodecahedronGeometryConstructor);
