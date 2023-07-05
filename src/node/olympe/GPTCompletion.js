
import {ActionBrick, Config, registerBrick, List, ListDef, QueryResult, ErrorFlow} from 'olympe';
import {getLogger} from '@olympeio/core';
import {Configuration, OpenAIApi} from 'openai';

// noinspection JSUnusedGlobalSymbols
export default class GPTCompletion extends ActionBrick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {string} currentPrompt
     * @param {boolean} chatting
     * @param {string} model
     * @param {Array<string>} userInputHistory
     * @param {Array<string>} chatGptOutputHistory
     * @param {number} maximumTokens
     * @param {Map<string, *>} options
     * @param {function()} forwardEvent
     * @param {function(*)} setErrorFlow
     * @param {function(string)} setAnswer
     */
    async update($, [currentPrompt, chatting, model, userInputHistory, chatGptOutputHistory, maximumTokens, options], [forwardEvent, setErrorFlow, setAnswer]) {
        this.logger = getLogger('GPTCompletion');
        if (!currentPrompt) {
            const errorMsg = 'No prompt to send to the GPT assistant';
            this.logger.error(errorMsg);
            setErrorFlow(ErrorFlow.create(errorMsg, 2));
            return;
        }
        let aiModel = model;
        if (model === 'default') {
            aiModel = chatting ? 'gpt-3.5-turbo' : 'text-davinci-003';
        }
        const configuration = new Configuration({
            organization: Config.getParameter('openai.organization'),
            apiKey: Config.getParameter('openai.apiKey')
        });
        const openai = new OpenAIApi(configuration);
        const inputHistory = this.getArray(userInputHistory);
        const outputHistory = this.getArray(chatGptOutputHistory);
        if (inputHistory.length !== outputHistory.length) {
            const errorMessage = 'User input and assistant output histories have different length.';
            this.logger.error(errorMessage);
            setErrorFlow(ErrorFlow.create(errorMessage, 2));
            return;
        }
        let additionalOptions = options;
        if (!options) {
            additionalOptions = new Map();
        }
        if (chatting) {
            // using chat api of openai in this case
            const response = await openai.createChatCompletion(
                {
                    model: aiModel,
                    messages: [
                        // standard system prompt
                        {'role': 'system', 'content': 'You are a helpful assistant.'},
                        // add chat history if exists
                        ...this.zipHistory(inputHistory, outputHistory),
                        // add current prompt (last user message)
                        {'role': 'user', 'content': currentPrompt}
                    ],
                    ...Object.fromEntries( additionalOptions.entries())
                }
            );
            setAnswer(response.data.choices[0].message.content.trim());
        } else {
            // use completion api of openai in this case, there can't be any history
            const answer = await openai.createCompletion({
                model: aiModel,
                prompt: currentPrompt,
                max_tokens: maximumTokens,
                ...Object.fromEntries(additionalOptions.entries())
            });
            setAnswer(answer.data.choices[0].text.replace(/^\n+/, ''));
        }
        forwardEvent();
    }

    /**
     * @param {!Array<string>} inputHistory
     * @param {!Array<string>} outputHistory
     */
    zipHistory(inputHistory, outputHistory) {
        const chatHistory = [];
        for (let i = 0; i < inputHistory.length; ++i) {
            chatHistory.push(this.createChatMessage('user', inputHistory[i]));
            chatHistory.push(this.createChatMessage('assistant', outputHistory[i]));
        }
        return chatHistory;
    }

    /**
     * @param {string} role
     * @param {string} content
     * @returns {{role, content}}
     */
    createChatMessage(role, content) {
        return {
            role: role,
            content: content
        };
    }

    getArray(olympeIterable) {
        let array = [];
        if (olympeIterable instanceof ListDef) {
            olympeIterable.forEachCurrentValue((item) => {
                array.push(item.valueOf());
            });
        } else if (olympeIterable instanceof Array) {
            array = [...olympeIterable];
        } else if (olympeIterable instanceof QueryResult) {
            array = olympeIterable.toArray();
        }
        return array;
    }
}

registerBrick('01891c1e2d87bf9eef51', GPTCompletion);
