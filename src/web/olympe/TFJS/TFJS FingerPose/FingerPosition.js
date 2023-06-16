import { register, CloudObject, Tag, Transaction, defineProperty, defineRelation, Direction } from 'olympe';

/**
 * @extends {CloudObject}
 */
export default class FingerPosition extends CloudObject {

    /**
     * Creates an instance of FingerPosition.
     *
     * @param {!Transaction} transaction
     * @return {!string} the tag of the created instance
     */
    static create(transaction) {
        return transaction.create(FingerPosition);
    }
    
    /**
     * @return {string}
     */
    getCurl() {
        return this.get(FingerPosition.curlProp);
    }

    /**
     * @param {!BrickContext} $
     * @return {!Observable<string>}
     */
    observeCurl($) {
        return this.observe($, FingerPosition.curlProp);
    }

    /**
     * @return {string}
     */
    getDirection() {
        return this.get(FingerPosition.directionProp);
    }

    /**
     * @param {!BrickContext} $
     * @return {!Observable<string>}
     */
    observeDirection($) {
        return this.observe($, FingerPosition.directionProp);
    }

    /**
     * @param {!Transaction} transaction
     * @param {!Tag} instance
     * @param {string} value
     */
    static setCurl(transaction, instance, value) {
        transaction.update(instance, FingerPosition.curlProp, value);
    }

    /**
     * @param {!Transaction} transaction
     * @param {!Tag} instance
     * @param {string} value
     */
    static setDirection(transaction, instance, value) {
        transaction.update(instance, FingerPosition.directionProp, value);
    }

}

// Hardcoded tags
register('0188c375f655b9938d16', FingerPosition);
FingerPosition.curlProp = defineProperty('0188c378dfa23c055dc1');
FingerPosition.directionProp = defineProperty('0188c3791a372c4aa47f');
FingerPosition.inverse_handthumbRel = defineRelation('0188c3793fce0c62673c', Direction.ORIGIN);
FingerPosition.inverse_handindexRel = defineRelation('0188c379451d43557859', Direction.ORIGIN);
FingerPosition.inverse_handmiddleRel = defineRelation('0188c37949c27da74a5a', Direction.ORIGIN);
FingerPosition.inverse_handringRel = defineRelation('0188c3794e8c288bcc7b', Direction.ORIGIN);
FingerPosition.inverse_handpinkyRel = defineRelation('0188c379537de7842d60', Direction.ORIGIN);
