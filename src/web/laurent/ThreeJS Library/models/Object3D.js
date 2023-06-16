import { register, CloudObject, Tag, Transaction, defineProperty } from 'olympe';

/**
 * @extends {CloudObject}
 */
export default class Object3D extends CloudObject {

    /**
     * Creates an instance of Object3D.
     *
     * @param {!Transaction} transaction
     * @return {!string} the tag of the created instance
     */
    static create(transaction) {
        return transaction.create(Object3D);
    }
    
    /**
     * @return {number}
     */
    getRotZ() {
        return this.get(Object3D.rotZProp);
    }

    /**
     * @param {!BrickContext} $
     * @return {!Observable<number>}
     */
    observeRotZ($) {
        return this.observe($, Object3D.rotZProp);
    }

    /**
     * @return {number}
     */
    getRotY() {
        return this.get(Object3D.rotYProp);
    }

    /**
     * @param {!BrickContext} $
     * @return {!Observable<number>}
     */
    observeRotY($) {
        return this.observe($, Object3D.rotYProp);
    }

    /**
     * @return {number}
     */
    getRotX() {
        return this.get(Object3D.rotXProp);
    }

    /**
     * @param {!BrickContext} $
     * @return {!Observable<number>}
     */
    observeRotX($) {
        return this.observe($, Object3D.rotXProp);
    }

    /**
     * @return {number}
     */
    getPosZ() {
        return this.get(Object3D.posZProp);
    }

    /**
     * @param {!BrickContext} $
     * @return {!Observable<number>}
     */
    observePosZ($) {
        return this.observe($, Object3D.posZProp);
    }

    /**
     * @return {number}
     */
    getPosY() {
        return this.get(Object3D.posYProp);
    }

    /**
     * @param {!BrickContext} $
     * @return {!Observable<number>}
     */
    observePosY($) {
        return this.observe($, Object3D.posYProp);
    }

    /**
     * @return {number}
     */
    getPosX() {
        return this.get(Object3D.posXProp);
    }

    /**
     * @param {!BrickContext} $
     * @return {!Observable<number>}
     */
    observePosX($) {
        return this.observe($, Object3D.posXProp);
    }

    /**
     * @param {!Transaction} transaction
     * @param {!Tag} instance
     * @param {number} value
     */
    static setRotZ(transaction, instance, value) {
        transaction.update(instance, Object3D.rotZProp, value);
    }

    /**
     * @param {!Transaction} transaction
     * @param {!Tag} instance
     * @param {number} value
     */
    static setRotY(transaction, instance, value) {
        transaction.update(instance, Object3D.rotYProp, value);
    }

    /**
     * @param {!Transaction} transaction
     * @param {!Tag} instance
     * @param {number} value
     */
    static setRotX(transaction, instance, value) {
        transaction.update(instance, Object3D.rotXProp, value);
    }

    /**
     * @param {!Transaction} transaction
     * @param {!Tag} instance
     * @param {number} value
     */
    static setPosZ(transaction, instance, value) {
        transaction.update(instance, Object3D.posZProp, value);
    }

    /**
     * @param {!Transaction} transaction
     * @param {!Tag} instance
     * @param {number} value
     */
    static setPosY(transaction, instance, value) {
        transaction.update(instance, Object3D.posYProp, value);
    }

    /**
     * @param {!Transaction} transaction
     * @param {!Tag} instance
     * @param {number} value
     */
    static setPosX(transaction, instance, value) {
        transaction.update(instance, Object3D.posXProp, value);
    }

}

// Hardcoded tags
register('01835f0044419ed7fae8', Object3D);
Object3D.rotZProp = defineProperty('01835f015d2c86d4ea7b');
Object3D.rotYProp = defineProperty('01835f014ea42f46900e');
Object3D.rotXProp = defineProperty('01835f01402f577f8dbc');
Object3D.posZProp = defineProperty('01835f00a62acac64eb7');
Object3D.posYProp = defineProperty('01835f008ae4d1f2d6dd');
Object3D.posXProp = defineProperty('01835f0068f5f1319b1d');
