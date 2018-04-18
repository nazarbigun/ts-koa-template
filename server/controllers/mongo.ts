import ExampleModel from '../models/mongoExample';
import logger from '../core/logger/app-logger';

export async function getData(ctx): Promise<void> {
    try {
        ctx.body = await ExampleModel.find();
    } catch (err) {
        logger.error('Could not get data', err);
        ctx.body = err.message;
    }
}
