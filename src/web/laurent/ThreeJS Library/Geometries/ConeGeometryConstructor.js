import { Brick, registerBrick } from 'olympe';
import * as THREE from 'three';

export default class ConeGeometryConstructor extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} radius
     * @param {number} height
     * @param {number} radialSegments
     * @param {number} heightSegments
     * @param {boolean} openEnded
     * @param {number} thetaStart
     * @param {number} thetaLength
     * @param {function(*)} setConeGeometry
     */
    update($, [radius, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength], [setConeGeometry]) {
        setConeGeometry(new THREE.ConeGeometry( radius, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength ));
    }
}

registerBrick('0187370a1b140ae28dff', ConeGeometryConstructor);
