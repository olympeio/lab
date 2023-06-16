import { Brick, registerBrick } from 'olympe';
import * as THREE from 'three';
import {combineLatest, of} from 'rxjs';

export default class AmbientLightBuilder extends Brick {

    setupExecution($) {
        const ambientLight = new THREE.AmbientLight();
        //console.log('built an ambient light', ambientLight);
        return combineLatest([of(ambientLight)].concat(this.getInputs().map((i) => $.observe(i))));
    }

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {THREE.AmbientLight} ambientLight
     * @param {String} color
     * @param {number} intensity
     * @param {function(THREE.AmbientLight)} setAmbientLight
     */
    update($, [ambientLight, color, intensity], [setAmbientLight]) {
        ambientLight.color = color;
        ambientLight.intensity = intensity;
        
        setAmbientLight(ambientLight);
        //console.log('updated an ambient light', ambientLight, color, intensity);
    }
}

registerBrick('01835e8195f5a3b5f5fc', AmbientLightBuilder);
