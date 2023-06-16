import { register, CloudObject, QueryResult, Transaction, defineProperty, defineRelation } from 'olympe';

/**
 * @extends {CloudObject}
 */
export default class Gesture extends CloudObject {

    /**
     * Creates an instance of Gesture.
     *
     * @param {!Transaction} transaction
     * @return {!string} the tag of the created instance
     */
    static create(transaction) {
        return transaction.create(Gesture);
    }
    
    /**
     * @return {string}
     */
    getName() {
        return this.get(Gesture.nameProp);
    }

    /**
     * @return {!QueryResult<Curl>}
     */
    getCurls() {
        return this.follow(Gesture.curlsRel).executeFromCache();
    }

    /**
     * @return {!QueryResult<DirectionModel>}
     */
    getDirections() {
        return this.follow(Gesture.directionsRel).executeFromCache();
    }
}

// Hardcoded tags
register('0188c477d9f9a4fe1002', Gesture);
Gesture.nameProp = defineProperty('0188c47e1ea80a8eaafc');
Gesture.curlsRel = defineRelation('0188c478ce21d3ab7c2e');
Gesture.directionsRel = defineRelation('0188c478e88ad6136e20');
