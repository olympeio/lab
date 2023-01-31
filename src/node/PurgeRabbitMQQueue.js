import { getLogger } from '@olympeio/core';
import { ActionBrick, registerBrick, ErrorFlow } from 'olympe';
import { getChannel } from './helpers';

export default class PurgeRabbitMQQueue extends ActionBrick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {string} queue
     * @param {string} configIdentifier
     * @param {function()} forwardEvent
     * @param {function(*)} setResult
     * @param {function(*)} setError
     */
    update($, [queue, configIdentifier], [forwardEvent, setResult, setError]) {
        const logger = getLogger("PurgeRabbitMQQueue");
        logger.debug("Purge rabbit queue", queue);
        if (!queue || typeof queue !== "string") {
            const errorMsg = "Queue must be a string";
            logger.error(errorMsg);
            setError(ErrorFlow.create(errorMsg, 0));
            return;
        }
        getChannel(configIdentifier).then(channel => {
            logger.debug("Purge rabbitmq queue:", queue);
            channel.purgeQueue(queue, (err, ok) => {
                if (err) {
                    const errorMsg = "Failed to purge queue:" + queue;
                    logger.error(errorMsg);
                    setError(ErrorFlow.create(errorMsg, 0));
                    return;
                }
                logger.debug("Purge queue result", ok);
                setResult(ok);
                forwardEvent();
            });
        })
            .catch(err => {
                setError(ErrorFlow.create(err.message, 0));
            })
    }
}

registerBrick('01859bc606c087c3199c', PurgeRabbitMQQueue);
