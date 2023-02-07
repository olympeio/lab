import { getLogger } from '@olympeio/core';
import { ActionBrick, ErrorFlow, registerBrick } from 'olympe';
import { getChannel } from './helpers';

export default class SendRabbitMQMessage extends ActionBrick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {string} queue
     * @param {*} message
     * @param {boolean} persistent
     * @param {string} configIdentifier
     * @param {function()} forwardEvent
     * @param {function(*)} setErrorFlow
     */
    update($, [queue, message, persistent, configIdentifier], [forwardEvent, setError]) {
        const logger = getLogger("SendRabbitMQMessage");
        if (!queue || typeof queue !== "string") {
            const errorMsg = "Queue must be a string";
            logger.error(errorMsg);
            setError(ErrorFlow.create(errorMsg, 0));
            return;
        }
        if (!message || typeof message !== "string") {
            const errorMsg = "Message must be a string";
            logger.error(errorMsg);
            setError(ErrorFlow.create(errorMsg, 0));
            return;
        }
        getChannel(configIdentifier)
            .then(channel => {
                logger.info("Send rabbitmq message to queue:", queue);
                channel.sendToQueue(queue, Buffer.from(message), { persistent });
                forwardEvent();
            })
            .catch(err => {
                setError(ErrorFlow.create(err.message, 0));
            })
    }
}

registerBrick('018580c4d4d7de6fd7a3', SendRabbitMQMessage);
