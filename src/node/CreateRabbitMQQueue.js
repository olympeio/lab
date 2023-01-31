import { getLogger } from '@olympeio/core';
import { ActionBrick, registerBrick, ErrorFlow } from 'olympe';
import { getChannel } from './helpers';
export default class CreateRabbitMQQueue extends ActionBrick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {string} queue
     * @param {boolean} durable
     * @param {string} configIdentifier
     * @param {function()} forwardEvent
     * @param {function(string)} setQueue
     * @param {function(*)} setError
     */
    async update($, [queue, durable, configIdentifier], [forwardEvent, setQueue, setError]) {
        const logger = getLogger("CreateRabbitMQQueue");
        if (!queue || typeof queue !== "string") {
            const errorMsg = "Queue must be a string";
            logger.error(errorMsg);
            setError(ErrorFlow.create(errorMsg, 0));
            return;
        }
        if (durable === null || typeof durable !== 'boolean') {
            const errorMsg = "The durable [boolean] is required";
            logger.error(errorMsg);
            setError(ErrorFlow.create(errorMsg, 0));
            return;
        }
        logger.debug("Create rabbit queue", queue);
        logger.debug("Is queue durable", durable);
        getChannel(configIdentifier).then(channel => {
            channel.assertQueue(queue, {
                durable
            });
            setQueue(queue);
            forwardEvent();
        }).catch(err => {
            setError(ErrorFlow.create(err.message, 0));
        })
    }
}

registerBrick('01859b1499a9df8d17f7', CreateRabbitMQQueue);
