import { Brick, registerBrick } from 'olympe';

export default class OctahedronGeometryConstructor extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} radius
     * @param {number} detail
     * @param {function(*)} setOctahedronGeometry
     */
    update($, [radius, detail], [setOctahedronGeometry]) {
        setOctahedronGeometry(new THREE.OctahedronGeometry( radius, detail));
    }
}

registerBrick('018737d0bcd5bd6f1881', OctahedronGeometryConstructor);
