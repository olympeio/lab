import { Brick, registerBrick } from 'olympe';
import * as THREE from 'three';
import {combineLatest, of} from 'rxjs';

export default class MeshBuilder extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {THREE.Geometry} geometry
     * @param {THREE.Material} material
     * @param {function(THREE.Mesh)} setMesh
     */
    update($, [geometry, material, object3D], [setMesh]) {

        let mesh = $.get('threeMesh');

        //console.log('buildMesh', mesh, geometry, material);
        if (mesh == null){ 
            mesh = new THREE.Mesh( geometry, material ); 
            //console.log('build a new mesh', mesh, geometry, material);
            $.set('threeMesh', mesh);
            setMesh(
                mesh
            )     
        } else {
            mesh.geometry.dispose();
            mesh.geometry = geometry;
        }
        
        //this is computational heavy ... but looks nicer for now ;-)
        mesh.castShadow = true; //default is false
        mesh.receiveShadow = true; //default is false

        let processProperties = function([posX, posY, posZ, rotX, rotY, rotZ]){
            mesh.position.set(posX, posY, posZ);
            mesh.rotation.x = rotX;
            mesh.rotation.y = rotY;
            mesh.rotation.z = rotZ;
            //console.log('updated a mesh', posX, posY, posZ, rotX, rotY, rotZ);
        }

        combineLatest([
            object3D.observePosX($),
            object3D.observePosY($),
            object3D.observePosZ($),
            object3D.observeRotX($),
            object3D.observeRotY($),
            object3D.observeRotZ($)
        ]).subscribe(processProperties);

    }
}

registerBrick('0183573fbba524825f75', MeshBuilder);
