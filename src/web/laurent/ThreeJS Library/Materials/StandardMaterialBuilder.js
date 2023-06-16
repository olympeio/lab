import { Brick, registerBrick, File } from 'olympe';
import * as THREE from 'three';
import {combineLatest, of} from 'rxjs';

export default class StandardMaterialBuilder extends Brick {

    setupExecution($) {
        //TODO have the map an optional argument
        const material = new THREE.MeshStandardMaterial();
        //console.log('built a standard material ', material);
        return combineLatest([of(material)].concat(this.getInputs().map((i) => $.observe(i))));
    }

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {THREE.Material} material
     * @param {number} roughness
     * @param {number} metalness
     * @param {Color} color
     * @param {Color} emissive
     * @param {number} emissiveIntensity
     * @param {File} map
     * @param {function(THREE.MeshStandardMaterial)} setMaterial
     */
    update($, [material, roughness, metalness, color, emissive, emissiveIntensity, map], [setMaterial]) {
        // Write your code here. You have to implement this method !
        // Executed every time an input gets updated., override `setupExecution()` to change the behavior.

        material.roughness = roughness;
        material.metalness = metalness;
        material.color = new THREE.Color(color.getRed()/255, color.getGreen()/256,color.getBlue()/255);   
        material.emissive = new THREE.Color(emissive.getRed()/255, emissive.getGreen()/256,emissive.getBlue()/255);   
        material.emissiveIntensity = emissiveIntensity;
        
        //console.log('updated a standard material', material, roughness, metalness, color, emissive, emissiveIntensity, map);
        
        //TODO add support for textures
        //map.getUrl();
        //map.getContentUrl((texture) => {
        //    console.log(texture);
        //    material.map = new THREE.TextureLoader().load( texture );
        //    console.log(texture);
        //});
    


        setMaterial(material);
    }
}

registerBrick('01835739e81d90236227', StandardMaterialBuilder);