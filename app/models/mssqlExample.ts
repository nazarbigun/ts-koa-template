import * as Sequelize from 'sequelize';
import { sequelize } from '../controllers/mssql';

export const User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING,
    },
    lastName: {
        type: Sequelize.STRING,
    },
});
