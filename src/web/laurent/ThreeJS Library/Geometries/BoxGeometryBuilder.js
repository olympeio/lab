import { Brick, registerBrick } from 'olympe';
import * as THREE from 'three';

export default class BoxGeometryBuilder extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} width
     * @param {number} height
     * @param {number} depth
     * @param {function(THREE.BoxGeometry)} setBoxGeometry
     */
    update($, [width, height, depth], [setBoxGeometry]) {
        //console.log('boxGeometry builder', width, height, depth);
        setBoxGeometry(new THREE.BoxGeometry( width, height, depth));
    }


}

registerBrick('018357366758945d6340', BoxGeometryBuilder);
