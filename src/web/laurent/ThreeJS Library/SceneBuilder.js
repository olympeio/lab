import { Brick, registerBrick } from 'olympe';
import * as THREE from 'three';

export default class SceneBuilder extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(THREE.Scene)} setScene
     */
     update($, inputs, [setScene]) {
        
        let scene = new THREE.Scene();
        
        //console.log('built a scene', scene);
        function animate() {
            requestAnimationFrame( animate );

            //not sure we need the following line
            //renderer.render( scene, camera );

        }
        
        animate();
        
        setScene(scene);
    }
}

registerBrick('01835481363f03af56e5', SceneBuilder);
