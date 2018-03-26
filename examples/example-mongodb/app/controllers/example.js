import ExampleModel from '../models/example';

export const exampleCtrl = {
  async getExampleDocuments(ctx) {
    ctx.body = await ExampleModel.find();
  },
};

export default exampleCtrl;
