import { join } from 'path';
import swaggerJSDoc = require('swagger-jsdoc');

export const utilsCtrl = {
    createSpec(ctx) {
        const options = {
            swaggerDefinition: {
                info: {
                    title: 'Example API',
                    description: '',
                    version: '1.0.0',
                },
                securityDefinitions: {
                    token: {
                        type: 'apiKey',
                        name: 'Authorization',
                        in: 'header',
                    },
                },
            },
            apis: [join(process.cwd(), 'server/routers/**/*.js')] // Path to the API docs
        };
        ctx.body = swaggerJSDoc(options);
    },
};

export default utilsCtrl;
