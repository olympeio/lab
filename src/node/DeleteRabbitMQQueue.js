import { getLogger } from '@olympeio/core';
import { ActionBrick, ErrorFlow, registerBrick } from 'olympe';
import { getChannel } from './helpers';
export default class DeleteRabbitMQQueue extends ActionBrick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {boolean} ifUnused
     * @param {boolean} ifEmpty
     * @param {string} configIdentifier
     * @param {function()} forwardEvent
     * @param {function(*)} setResult
     * @param {function(*)} setError
     */
    update($, [queue, ifUnused, ifEmpty, configIdentifier], [forwardEvent, setResult, setError]) {
        const logger = getLogger("DeleteRabbitMQQueue");
        logger.info("Delete rabbit queue", queue);
        logger.info("ifUnused", ifUnused);
        logger.info("ifEmpty", ifEmpty);
        if (!queue || typeof queue !== "string") {
            const errorMsg = "Queue must be a string";
            logger.error(errorMsg);
            setError(ErrorFlow.create(errorMsg, 0));
            return;
        }
        getChannel(configIdentifier).then(channel => {
            logger.info("Delete rabbitmq queue:", queue);
            channel.deleteQueue(queue, { ifUnused, ifEmpty }, (err, ok) => {
                if (err) {
                    const errorMsg = "Failed to delete queue:" + queue;
                    logger.error(errorMsg);
                    setError(ErrorFlow.create(errorMsg, 0));
                    return;
                }
                logger.info("Delete queue result", ok);
                setResult(ok);
            });
        })
            .catch(err => {
                setError(ErrorFlow.create(err.message, 0));
            })
            .then(() => {
                forwardEvent();
            });
    }
}

registerBrick('01859bc5514b436bfe82', DeleteRabbitMQQueue);
