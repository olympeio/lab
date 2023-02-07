import { getLogger } from '@olympeio/core';
import { Brick, ErrorFlow, registerBrick } from 'olympe';
import { getChannel } from './helpers';

export default class OnRabbitMQMessageReceived extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {string} queue
     * @param {boolean} noAck
     * @param {string} configIdentifier
     * @param {function(*)} setMessage
     * @param {function(*)} setError
     * @param {function(string)} setQueue
     */
    update($, [queue, noAck, configIdentifier], [setMessage, setError, setQueue]) {
        const logger = getLogger("OnRabbitMQMessageReceived");
        if (!queue || typeof queue !== "string") {
            const errorMsg = "Queue must be a string";
            logger.error(errorMsg);
            setError(ErrorFlow.create(errorMsg, 0));
            return;
        }
        getChannel(configIdentifier)
            .then(channel => {
                logger.info("Listen message on rabbitmq queue", queue);
                channel.consume(queue, (msg) => {
                    if (!msg) {
                        logger.info("Rabbitmq queue is closed");
                        setMessage(null);
                        return;
                    }
                    const text = msg.content.toString();
                    logger.info("Rabbitmq receive message:", text);
                    setMessage(text);
                    if (!noAck) channel.ack(msg);
                }, { noAck });
                setQueue(queue);
            })
            .catch(err => {
                setError(ErrorFlow.create(err.message, 1));
            });


    }
}

registerBrick('01850a65c63b426f1827', OnRabbitMQMessageReceived);
