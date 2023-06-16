import { Brick, registerBrick } from 'olympe';
import * as THREE from 'three';

export default class AddObject3D extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {THREE.Object3D} parent
     * @param {THREE.Object3D} child
     * @param {function(THREE.Object3D)} setParent
     */
     update($, [parent, child], [setParent]) {

        //TODO ensure that if new child, old one is removed
        parent.add(child);
        setParent(parent);
        //console.log('object3d.add', parent, child);
    }
}

registerBrick('01835741aabf3a285750', AddObject3D);
