import * as path from 'path';
import * as swaggerJsdoc from 'swagger-jsdoc';

export const utilsCtrl = {
  createSpec(ctx) {
    const options = {
      swaggerDefinition: {
        info: {
          title: 'Example API',
          description: '',
          version: '1.0.0'
        },
        securityDefinitions: {
          token: {
            type: 'apiKey',
            name: 'Authorization',
            in: 'header'
          }
        }
      },
      apis: [path.join(process.cwd(), 'server/routers/**/*.js')] // Path to the API docs
    };
    ctx.body = swaggerJsdoc(options);
  },
};

export default utilsCtrl;
