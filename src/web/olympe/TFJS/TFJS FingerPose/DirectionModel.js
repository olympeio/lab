import { register, CloudObject, Tag, Transaction, defineProperty, defineRelation, Direction} from 'olympe';

/**
 * @extends {CloudObject}
 */
export default class DirectionModel extends CloudObject {

    /**
     * Creates an instance of DirectionModel.
     *
     * @param {!Transaction} transaction
     * @return {!string} the tag of the created instance
     */
    static create(transaction) {
        return transaction.create(DirectionModel);
    }
    
    /**
     * @return {string}
     */
    getFinger() {
        return this.get(DirectionModel.fingerProp);
    }

    /**
     * @param {!BrickContext} $
     * @return {!Observable<string>}
     */
    observeFinger($) {
        return this.observe($, DirectionModel.fingerProp);
    }

    /**
     * @return {string}
     */
    getDirectionModelValue() {
        return this.get(DirectionModel.directionValueProp);
    }

    /**
     * @param {!BrickContext} $
     * @return {!Observable<string>}
     */
    observeDirectionModelValue($) {
        return this.observe($, DirectionModel.directionValueProp);
    }

    /**
     * @param {!Transaction} transaction
     * @param {!Tag} instance
     * @param {string} value
     */
    static setFinger(transaction, instance, value) {
        transaction.update(instance, DirectionModel.fingerProp, value);
    }

    /**
     * @param {!Transaction} transaction
     * @param {!Tag} instance
     * @param {string} value
     */
    static setDirectionModelValue(transaction, instance, value) {
        transaction.update(instance, DirectionModel.directionValueProp, value);
    }

}

// Hardcoded tags
register('0188c4781bbb6b895c11', DirectionModel);
DirectionModel.fingerProp = defineProperty('0188c47a8afa96bce18b');
DirectionModel.directionValueProp = defineProperty('0188c47a97f02304ecb7');
DirectionModel.inverse_gesturedirectionsRel = defineRelation('0188c478e88ad6136e20', Direction.ORIGIN);
