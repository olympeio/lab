import { register, CloudObject, Tag, Transaction, defineProperty, defineRelation, Direction } from 'olympe';

/**
 * @extends {CloudObject}
 */
export default class Direction extends CloudObject {

    /**
     * Creates an instance of Direction.
     *
     * @param {!Transaction} transaction
     * @return {!string} the tag of the created instance
     */
    static create(transaction) {
        return transaction.create(Direction);
    }
    
    /**
     * @return {string}
     */
    getFinger() {
        return this.get(Direction.fingerProp);
    }

    /**
     * @param {!BrickContext} $
     * @return {!Observable<string>}
     */
    observeFinger($) {
        return this.observe($, Direction.fingerProp);
    }

    /**
     * @return {string}
     */
    getDirectionValue() {
        return this.get(Direction.directionValueProp);
    }

    /**
     * @param {!BrickContext} $
     * @return {!Observable<string>}
     */
    observeDirectionValue($) {
        return this.observe($, Direction.directionValueProp);
    }

    /**
     * @param {!Transaction} transaction
     * @param {!Tag} instance
     * @param {string} value
     */
    static setFinger(transaction, instance, value) {
        transaction.update(instance, Direction.fingerProp, value);
    }

    /**
     * @param {!Transaction} transaction
     * @param {!Tag} instance
     * @param {string} value
     */
    static setDirectionValue(transaction, instance, value) {
        transaction.update(instance, Direction.directionValueProp, value);
    }

}

// Hardcoded tags
register('0188c4781bbb6b895c11', Direction);
Direction.fingerProp = defineProperty('0188c47a8afa96bce18b');
Direction.directionValueProp = defineProperty('0188c47a97f02304ecb7');
Direction.inverse_gesturedirectionsRel = defineRelation('0188c478e88ad6136e20', Direction.ORIGIN);
