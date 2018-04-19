import { Schema, model } from 'mongoose';

const schema = new Schema({
    textField: { type: 'string', required: true },
}, {
    collection: 'ExampleCollection',
});

export default model('ExampleModel', schema);
