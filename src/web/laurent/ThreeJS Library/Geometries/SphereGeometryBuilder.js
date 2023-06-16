import { Brick, registerBrick } from 'olympe';
import * as THREE from 'three';

export default class SphereGeometryBuilder extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} radius
     * @param {number} widthSegments
     * @param {number} heightSegments
     * @param {number} phiStart
     * @param {number} phiLength
     * @param {number} thetaStart
     * @param {number} thetaLength
     * @param {function(*)} setSphere
     */
    update($, [radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength], [setSphere]) {
        
        const sphere = new THREE.SphereGeometry( radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength );
        //console.log('built a sphere', sphere);
        setSphere(sphere);
    }
}

registerBrick('01835c7d721be3d0aa2a', SphereGeometryBuilder);
