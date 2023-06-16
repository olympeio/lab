import { Brick, registerBrick } from 'olympe';
import * as THREE from 'three';


export default class CapsuleGeometryConstructor extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} radius
     * @param {number} length
     * @param {number} capSegments
     * @param {number} radialSegments
     * @param {function(*)} setCapsuleGeometry
     */
    update($, [radius, length, capSegments, radialSegments], [setCapsuleGeometry]) {
        setCapsuleGeometry(new THREE.CapsuleGeometry(radius, length, capSegments, radialSegments) );
    }
}

registerBrick('01872ed92d090da68772', CapsuleGeometryConstructor);
