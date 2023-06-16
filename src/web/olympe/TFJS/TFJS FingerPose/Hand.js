import { register, CloudObject, Tag, Transaction, defineProperty, defineRelation } from 'olympe';
import FingerPosition from './FingerPosition';

/**
 * @extends {CloudObject}
 */
export default class Hand extends CloudObject {

    /**
     * Creates an instance of Hand.
     *
     * @param {!Transaction} transaction
     * @return {!string} the tag of the created instance
     */
    static create(transaction) {
        return transaction.create(Hand);
    }
    
    /**
     * @return {string}
     */
    getName() {
        return this.get(Hand.nameProp);
    }
    /**
     * 
     * @return {FingerPosition}
     */
    getThumb() {
        return this.follow(Hand.thumbRel).executeFromCache().getFirst();
    }
    /**
     * 
     * @return {FingerPosition}
     */
     getIndex() {
        return this.follow(Hand.indexRel).executeFromCache().getFirst();
    }
    /**
     * 
     * @return {FingerPosition}
     */
     getMiddle() {
        return this.follow(Hand.middleRel).executeFromCache().getFirst();
    }
    /**
     * 
     * @return {FingerPosition}
     */
     getRing() {
        return this.follow(Hand.ringRel).executeFromCache().getFirst();
    }
    /**
     * 
     * @return {FingerPosition}
     */
     getPinky() {
        return this.follow(Hand.pinkyRel).executeFromCache().getFirst();
    }

    /**
     * @param {!BrickContext} $
     * @return {!Observable<string>}
     */
    observeName($) {
        return this.observe($, Hand.nameProp);
    }

    /**
     * @param {!Transaction} transaction
     * @param {!Tag} instance
     * @param {string} value
     */
    static setName(transaction, instance, value) {
        transaction.update(instance, Hand.nameProp, value);
    }

}

// Hardcoded tags
register('0188c375da3137cf072d', Hand);
Hand.nameProp = defineProperty('0188c37c59a1024e2bd6');
Hand.thumbRel = defineRelation('0188c3793fce0c62673c');
Hand.indexRel = defineRelation('0188c379451d43557859');
Hand.middleRel = defineRelation('0188c37949c27da74a5a');
Hand.ringRel = defineRelation('0188c3794e8c288bcc7b');
Hand.pinkyRel = defineRelation('0188c379537de7842d60');
