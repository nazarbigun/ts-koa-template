import dbConnect from '../db';

export const exampleCtrl = {
  async getTableNames(ctx) {
    ctx.body = await dbConnect.query`SELECT table_name FROM information_schema.tables`;
  },
};

export default exampleCtrl;
