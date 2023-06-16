import { Brick, registerBrick } from 'olympe';

export default class IcosahedronGeometryConstructor extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} radius
     * @param {number} detail
     * @param {function(*)} setIcosahedronGeometry
     */
    update($, [radius, detail], [setIcosahedronGeometry]) {
        setIcosahedronGeometry(new THREE.IcosahedronGeometry(radius, detail)); 
    }
}

registerBrick('018737c577c49921826f', IcosahedronGeometryConstructor);
