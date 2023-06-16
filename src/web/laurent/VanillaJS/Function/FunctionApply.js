import { Brick, registerBrick } from 'olympe';

export default class NativeFunctionCall extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {function} jsVanillaFunction
     * @param {Array} args
     * @param {function(*)} setFunctionOutput
     */
    update($, [jsVanillaFunction, args], [setFunctionOutput]) {
        //TODO have a clean way to make args optional
        //console.log('FunctionApply, before call', jsVanillaFunction, args);
        var functionReturn = jsVanillaFunction.apply(null, args)
        //console.log('returns', functionReturn);
        setFunctionOutput(functionReturn);
    }
}

registerBrick('0183dc3319d5b4cefcb5', NativeFunctionCall);
