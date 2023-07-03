import { register, CloudObject, Tag, Transaction, defineProperty, defineRelation, Direction } from 'olympe';

/**
 * @extends {CloudObject}
 */
export default class Curl extends CloudObject {

    /**
     * Creates an instance of Curl.
     *
     * @param {!Transaction} transaction
     * @return {!string} the tag of the created instance
     */
    static create(transaction) {
        return transaction.create(Curl);
    }
    
    /**
     * @return {string}
     */
    getCurlValue() {
        return this.get(Curl.curlValueProp);
    }

    /**
     * @param {!BrickContext} $
     * @return {!Observable<string>}
     */
    observeCurlValue($) {
        return this.observe($, Curl.curlValueProp);
    }

    /**
     * @return {string}
     */
    getFinger() {
        return this.get(Curl.fingerProp);
    }

    /**
     * @param {!BrickContext} $
     * @return {!Observable<string>}
     */
    observeFinger($) {
        return this.observe($, Curl.fingerProp);
    }

    /**
     * @param {!Transaction} transaction
     * @param {!Tag} instance
     * @param {string} value
     */
    static setCurlValue(transaction, instance, value) {
        transaction.update(instance, Curl.curlValueProp, value);
    }

    /**
     * @param {!Transaction} transaction
     * @param {!Tag} instance
     * @param {string} value
     */
    static setFinger(transaction, instance, value) {
        transaction.update(instance, Curl.fingerProp, value);
    }

}

// Hardcoded tags
register('0188c478161c93a3847d', Curl);
Curl.curlValueProp = defineProperty('0188c47a716714ec2f67');
Curl.fingerProp = defineProperty('0188c47a83b413dffb28');
Curl.inverse_gesturecurlsRel = defineRelation('0188c478ce21d3ab7c2e', Direction.ORIGIN);
