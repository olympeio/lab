import { Brick, registerBrick } from 'olympe';
import * as THREE from 'three';

export default class TorusGeometryBuilder extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} radius
     * @param {number} tube
     * @param {number} radialSegments
     * @param {number} tubularSegments
     * @param {number} arc
     * @param {function(THREE.TorusGeometry)} setTorus
     */
    update($, [radius, tube, radialSegments, tubularSegments, arc], [setTorus]) {
        const torus = new THREE.TorusGeometry( radius, tube, radialSegments, tubularSegments, arc );
        //console.log('built a torus geometry', torus);
        setTorus(torus);
    }
}

registerBrick('018364d7e3a0ade0e4e1', TorusGeometryBuilder);
