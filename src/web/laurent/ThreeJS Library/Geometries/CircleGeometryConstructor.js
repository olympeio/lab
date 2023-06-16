import { Brick, registerBrick } from 'olympe';
import * as THREE from 'three';

export default class CircleGeometryConstructor extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} radius
     * @param {number} segments
     * @param {number} thetaStart
     * @param {number} thetaLength
     * @param {function(*)} setCircleGeometry
     */
    update($, [radius, segments, thetaStart, thetaLength], [setCircleGeometry]) {
        setCircleGeometry(new THREE.CircleGeometry( radius, segments, thetaStart, thetaLength));
    }
}

registerBrick('01873312a4cd891c2cd1', CircleGeometryConstructor);
