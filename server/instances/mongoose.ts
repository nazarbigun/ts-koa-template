import * as mongoose from 'mongoose';
import logger from '../core/logger/app-logger';

export function mongooseConnect() {
    mongoose.connect(`mongodb://localhost:27017/test`)
        .then(() => {
            logger.info('Connected to mongo successfully');
        })
        .catch(err => {
            logger.error('Cannot connect to mongo db', err);
        });
}
