import { User } from '../models/mssqlExample';
import logger from '../core/logger/app-logger';

export async function getData(ctx): Promise<void> {
    try {
        const users = await User.findAll();
        ctx.body = users;
        return users;
    } catch (err) {
        logger.error('Could not get user data');
        ctx.body = err.message;
    }
}

