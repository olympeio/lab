import { Brick, registerBrick } from 'olympe';
import * as THREE from 'three';
import Object3D from '../models/Object3D';
import {combineLatest} from 'rxjs';

export default class CameraBuilder extends Brick {


    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {Object3D} object3D //this is NOT the Three.Object3D class
     * @param {function(THREE.PerspectiveCamera)} setCamera
     */
     update($, [object3D], [setCamera]) {

        const camera = $.get('threeCamera__');
        

        let processProperties = function([posX, posY, posZ, rotX, rotY, rotZ]){
            camera.position.set(posX, posY, posZ);
            camera.rotation.x = rotX;
            camera.rotation.y = rotY;
            camera.rotation.z = rotZ;
            //console.log('updated a camera', posX, posY, posZ, rotX, rotY, rotZ);
        }

        combineLatest([
            object3D.observePosX($),
            object3D.observePosY($),
            object3D.observePosZ($),
            object3D.observeRotX($),
            object3D.observeRotY($),
            object3D.observeRotZ($)
        ]).subscribe(processProperties);

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        setCamera(camera);
    }

    init($) {

        const height = $.get('Height');
        const width = $.get('Width');
        let camera = new THREE.PerspectiveCamera( 70, width / height, 1, 1000 );
        //console.log('built a camera', camera);
        $.set('threeCamera__', camera);
        
    }
}

registerBrick('018360e3761e915c8f85', CameraBuilder);

