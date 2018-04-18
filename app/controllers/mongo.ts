import * as mongoose from 'mongoose';
import ExampleModel from '../models/mongoExample';

async function connect() {
    try {
        // Connect to a MongoDB instance. The connection string could be that of a remote server
        await mongoose.connect(`mongodb://localhost:2701/test`);
    } catch (err) {
        console.error('Cannot connect to mongo db', err);
    }
}

export async function getData(ctx): Promise<void> {
    try {
        await connect();
        const data = await ExampleModel.find();
        console.log(data);
        ctx.body = data;
    } catch (err) {
        console.error('Could not get data', err);
        ctx.body = err.message;
    }
}
