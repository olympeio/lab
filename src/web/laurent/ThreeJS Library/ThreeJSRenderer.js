import { VisualBrick, registerBrick } from 'olympe';
import * as THREE from 'three';
import {combineLatest} from 'rxjs';

export default class ThreeJSRenderer extends VisualBrick {

    setupExecution($) {
        return combineLatest([$.observe('camera'), $.observe('scene')]);
    }

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array<*>} properties
     * @return {Element}
     */
    render($, [camera, scene]) {
        
        //TODO: how to have optional arguments like for example the map of the texture?
        //TODO: how to have 2 different options to set a variable like for example the lookAt/rotation or Euler/Quaternion?

        let renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.shadowMap.enabled = true;
        
        function resizeContainer([w, h]){
            camera.aspect = w / h; 
            camera.updateProjectionMatrix();
            renderer.setSize( w, h );
        }
        combineLatest($.observe('Width'), $.observe('Height')).subscribe(resizeContainer); 
        

        function animate() {
            requestAnimationFrame( animate );
            renderer.render( scene, camera );
        }
        animate();

        return renderer.domElement;
    }
}

registerBrick('0183547e8b9a0f11a1e0', ThreeJSRenderer);
