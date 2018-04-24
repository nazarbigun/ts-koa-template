require('dotenv').config();

const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 5000;

const config = {
    development: {
        server: {
            port,
        },
        db: {},
        swagger: {
            route: '/docs',
            apis: ['../routers/*.js'],
            specRoute: '/docs/swagger.json',
        },
        logs: {
            logFileName: 'logs_dev',
            logFileDir: 'logs',
        },
    },
};

export default config[env];
