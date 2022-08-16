const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});

function error(val) {
    if (typeof val === 'number') {
        return val * 2;
    }
    throw new Error('Oye, que aqui hay un error!');
}

try {
    const e = error('a')
    console.log(e)
} catch (e) {
    logger.error(e.message)
}
