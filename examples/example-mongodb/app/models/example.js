import mongoose from 'mongoose';


const schema = new mongoose.Schema({
  textField: { type: 'string', required: true },
}, {
  collection: 'ExampleCollection'
});

export default mongoose.model('ExampleModel', schema);
