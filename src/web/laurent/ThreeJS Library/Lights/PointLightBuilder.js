import { Brick, registerBrick, Color } from 'olympe';
import * as THREE from 'three';
import {combineLatest, of} from 'rxjs';

export default class PointLightBuilder extends Brick {

    setupExecution($) {
        const pointLight = new THREE.PointLight();
        //console.log('built a point light', pointLight);
        return combineLatest([of(pointLight)].concat(this.getInputs().map((i) => $.observe(i))));
    }

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {Color} color
     * @param {number} intensity
     * @param {number} distance
     * @param {number} decay
     * @param {Object3D} object3D //this is NOT the Three.Object3D class
     * @param {function(THREE.PointLight)} setPointLight
     */
    update($, [pointLight, color, intensity, distance, decay, object3D], [setPointLight]) {

        let processProperties = function([posX, posY, posZ, rotX, rotY, rotZ]){
            pointLight.position.set(posX, posY, posZ);
            pointLight.rotation.x = rotX;
            pointLight.rotation.y = rotY;
            pointLight.rotation.z = rotZ;
            //console.log('updated a point light', posX, posY, posZ, rotX, rotY, rotZ);
        }

        combineLatest([
            object3D.observePosX($),
            object3D.observePosY($),
            object3D.observePosZ($),
            object3D.observeRotX($),
            object3D.observeRotY($),
            object3D.observeRotZ($)
        ]).subscribe(processProperties);

        
        
        pointLight.castShadow = true; // default false

        pointLight.color = new THREE.Color(color.getRed()/255, color.getGreen()/256,color.getBlue()/255);   
        
        pointLight.intensity = intensity;
        pointLight.distance = distance;
        pointLight.decay = decay;

        pointLight.castShadow = false; // default false
  
        // "pixel density" of the casted shadows
        pointLight.shadow.mapSize.width = 8192; // default (pixelisatin of shadow)
        pointLight.shadow.mapSize.height = 8192; // default
        pointLight.shadow.camera.near = 0.5; // default
        pointLight.shadow.camera.far = 500; // default
        
        setPointLight(pointLight);
    }
}

registerBrick('018361752f5071f8053e', PointLightBuilder);
