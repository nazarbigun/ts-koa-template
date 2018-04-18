import * as winston from 'winston';

require('winston-daily-rotate-file');
import config from '../config/default';
import * as fs from 'fs';

const dir = config.logs.logFileDir;

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}


export default new winston.Logger({
    level: 'info',
    transports: [
        new (winston.transports.Console)({
            colorize: true,
        }),
        new winston.transports.DailyRotateFile({
            filename: config.logs.logFileName,
            dirname: config.logs.logFileDir,
            maxsize: 20971520, // 20MB
            maxFiles: 25,
            datePattern: '.dd-MM-yyyy',
        }),
    ],
});
