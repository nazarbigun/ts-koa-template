import { Logger, transports } from 'winston';
import { existsSync, mkdirSync } from 'fs';
import config from '../config/default';

require('winston-daily-rotate-file');

const dir = config.logs.logFileDir;

if (!existsSync(dir)) {
    mkdirSync(dir);
}

export default new Logger({
    level: 'info',
    transports: [
        new (transports.Console)({
            colorize: true,
        }),
        new transports.DailyRotateFile({
            filename: config.logs.logFileName,
            dirname: config.logs.logFileDir,
            maxsize: 20971520, // 20MB
            maxFiles: 25,
            datePattern: '.dd-MM-yyyy',
        }),
    ],
});
