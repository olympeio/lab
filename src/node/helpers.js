import amqp from 'amqplib/callback_api';
import { Config, Process } from 'olympe';

class RabbitMQHelper {
    /**
     * @public
     * @return {RabbitMQHelper}
     */
    constructor() {
        // Check if an instance already exists (Lazy loading)
        if (!RabbitMQHelper.instance) {
            /**
             * @type {Map<String, Object>}
             */
            this.connectionMap = new Map();
            this.channel = new Map();

            /**
             * The RabbitMQHelper Singleton instance
             * @private
             * @type {RabbitMQHelper}
             */
            RabbitMQHelper.instance = this;

            // Registering the deconnection handler on first call
            Process.onShutdown(() => this.close())
        }
        return RabbitMQHelper.instance;
    }

    /**
     * @public
     * @return {Object}
     */
    getConnections() {
        return this.connectionMap.entries();
    }

    /**
     * @public
     * @param {string} key
     * @return {Object}
     */
    getConnectionByKey(key) {
        return this.connectionMap.get(key);
    }

    /**
     * @public
     * @param {string} key
     * @param {Object} connection
     */
    set(key, connection) {
        this.connectionMap.set(key, connection);
    }

    /**
     * @public
     * @param {string} key
     * @return {Object}
     */
    getChannelByKey(key) {
        return this.channel.get(key);
    }

    /**
     * @public
     * @return {Object}
     */
    getChannels() {
        return this.channel.entries();
    }

    /**
     * @public
     * @param {string} key
     * @param {Object} channel
     */
    setChannel(key, channel) {
        this.channel.set(key, channel);
    }

    /**
     * Close all channels to the rabbitMQ server(s)
     *
     * @public
     */
    close() {
        return new Promise((resolve, reject) => {
            try {

                const allChannels = this.getChannels();
                if (allChannels) {
                    for (const [key, channel] of allChannels) {
                        channel?.close();
                    }
                }
                const allconnections = this.getConnections();
                if (allconnections) {
                    for (const [key, connection] of allconnections) {
                        connection?.close();
                    }
                }

                resolve('Rabbit MQ Extension stopped successfully.');
            } catch (err) {
                reject(err);
            }
        });
    }
}

let instance = null;
export const rabbitMQHelper = () => {
    if (instance === null) {
        // Instantiate the Singleton
        instance = new RabbitMQHelper();
    }
    return instance;
}



export const getConnection = (configIdentifier) => {
    return new Promise((resolve, reject) => {
        let connection = rabbitMQHelper().getConnectionByKey(configIdentifier);
        if (connection) {
            return resolve(connection);
        }
        const url = Config.getParameter(`rabbitmq.${configIdentifier}`);
        if (!url) {
            const errorMsg = "Rabbit url identifier does not exist: " + url;
            return reject(ErrorFlow.create(errorMsg, 0));
        }
        amqp.connect(url, function (err, connection) {
            if (err) {
                return reject();
            }
            rabbitMQHelper().set(configIdentifier, connection);
            resolve(connection);
        });
    })
}

export const getChannel = (configIdentifier) => {
    return new Promise(async (resolve, reject) => {
        let channel = rabbitMQHelper().getChannelByKey(configIdentifier);
        if (channel) {
            return resolve(channel);
        } else {
            try {
                const connection = await getConnection(configIdentifier);
                if (!connection) {
                    return reject();
                }
                connection.createChannel(function (err, channel) {
                    if (err) {
                        return reject(Error("Failed to create rabbitmq channel"));
                    }
                    channel.prefetch(1); // not to give more than one message to a worker at a time
                    rabbitMQHelper().setChannel(configIdentifier, channel);
                    resolve(channel);
                });
            } catch (err) {
                return reject(Error('Faile do create rabbitmq channel'));
            }
        }
    })
}
