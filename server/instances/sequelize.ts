import * as Sequelize from 'sequelize';
import logger from '../core/logger/app-logger';

export const sequelize: Sequelize = new Sequelize('mssql://user:pass@localhost:5432/dbname');

export function mssqlConnect(): void {
    sequelize.authenticate().then(() => {
        logger.info('Connection has been established successfully.');
    }).catch(err => {
        logger.error('Unable to connect to the database:', err);
    });
}
