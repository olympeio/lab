import {ActionBrick, Config, registerBrick} from 'olympe';
import {Configuration, OpenAIApi, CreateCompletionRequest} from 'openai';

export default class GPTCodeGenerationAPI extends ActionBrick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {string} brickName
     * @param {string} shortDescription
     * @param {string} longDescription
     * @param {Map} inputs
     * @param {Map} outputs
     * @param {function()} forwardEvent
     * @param {function(string)} setBodyCode
     */
    async update($, [brickName, shortDescription, longDescription, inputs, outputs], [forwardEvent, setBodyCode]) {
        const configuration = new Configuration({
            organization: Config.getParameter('openai.organization'),
            apiKey: Config.getParameter('openai.apiKey')
        });
        const openai = new OpenAIApi(configuration);
        const model = 'text-davinci-003';
        const prompt = this.createPrompt(shortDescription, longDescription, inputs, outputs);
        const answer = await openai.createCompletion({
            model: model,
            prompt: prompt,
            max_tokens: 100,
            temperature: 0
        });
        setBodyCode(answer.data.choices[0].text.replace(/^\n+/, ''));
        forwardEvent();
    }


    createPrompt(shortDescription, longDescription, inputs, outputs) {
        const start = 'You are a code assistant and give me only the body of a javascript function matching the behavior I describe. You do not, ever, give me the function signature. All lignes should be an assignment or a function call.';
        const brickDescription = `The task the code should execute is: \"${shortDescription}\". Here are more details about this task: \"${longDescription}\".`;
        const inputsPrompt = this.createInputsPrompt(inputs);
        const outputsPrompt = this.createOutputsPrompt(outputs);
        return start + brickDescription + inputsPrompt + outputsPrompt;
    }

    /**
     * @param {Map<string, string>} inputs
     */
    createInputsPrompt(inputs) {
        const start = 'You can use the following variables in the code body:\n';
        let inputsDescription = '';
        for (const [inputName, inputDescription] of inputs) {
            inputsDescription +=`- variable name \"${this.getCamelCaseNameLower(inputName)}\" with description: \"${inputDescription}\"\n`
        }
        return start + inputsDescription;
    }

    /**
     * @param {Map <string, string>} inputs
     */
    createOutputsPrompt(outputs){
        const start = 'You do not return anything. To return the result(s), you call the following functions at the end of the body. The only argument to these functions is one of the output matching the description:\n';
        let outputsDescription =  '';
        for (const [outputFunctionName, outputDescription] of this.getReturnFunctionsName(outputs)) {
            outputsDescription += `- \"${outputFunctionName}\", whose description is: \"${outputDescription}\".\n`;
        }
        const end = '';
        return start + outputsDescription + end;
    }

    /**
     * @param {Map<string, string>} outputs
     * @return {Map <string, string>}
     */
    getReturnFunctionsName(outputs){
        const outputsWithReturnNames = new Map();
        for (const [outputName, outputDesc] of outputs) {
            outputsWithReturnNames.set('set' + this.getCamelCaseName(outputName), outputDesc);
        }
        return outputsWithReturnNames;
    }
    /**
     * Return an instance name camel-cased at spaces. Characters that are not alpha-numeric will be removed.
     *
     * @param {olympe.dc.InstanceTag} instance
     * @return {string}
     */
    getCamelCaseName(name) {
        // Helpers
        const toFirstUpperCase = (s) => s.substring(0, 1).toUpperCase() + s.substring(1);

        // Get property name from DB, split words, remove empty parts (if multiple white spaces in a row), remove non
        // alphanumeric characters, and camel case
        const nameParts = name.split(' ')
            .filter((part) => part.length !== 0)
            .map((part) => toFirstUpperCase(part.replace(/[\W]/g, '')));
        // Join parts and lower case first character
        return nameParts.join('');
    }

    getCamelCaseNameLower(name){
        const camelCase = this.getCamelCaseName(name);
        return camelCase.substring(0, 1).toLowerCase() + camelCase.substring(1);
    }
}

registerBrick('0188c31b201d433d8540', GPTCodeGenerationAPI);
