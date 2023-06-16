import { Brick, registerBrick } from 'olympe';
import * as THREE from 'three';

export default class PlaneGeometryBuilder extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} width
     * @param {number} height
     * @param {number} widthSegments
     * @param {number} heightSegments
     * @param {function(THREE.PlaneGeometry)} setPlaneGeometry
     */
    update($, [width, height, widthSegments, heightSegments], [setPlaneGeometry]) {
        // Write your code here. You have to implement this method !
        // Executed every time an input gets updated., override `setupExecution()` to change the behavior.
        const plane = new THREE.PlaneGeometry( width, height, widthSegments, heightSegments );
        //console.log('built a plane', plane);
        setPlaneGeometry(plane);
    }
}

registerBrick('01835c837bd12637a2a1', PlaneGeometryBuilder);
