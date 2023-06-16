import { Brick, registerBrick } from 'olympe';

export default class CylinderGeometryConstructor extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} radiusTop
     * @param {number} radiusBottom
     * @param {number} height
     * @param {number} radialSegments
     * @param {number} heightSegments
     * @param {boolean} openEnded
     * @param {number} thetaStart
     * @param {number} thetaLength
     * @param {function(*)} setCylinderGeometry
     */
    update($, [radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength], [setCylinderGeometry]) {
        setCylinderGeometry(new THREE.CylinderGeometry( radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength ))
    }
}

registerBrick('0187370e33db8e508f52', CylinderGeometryConstructor);
