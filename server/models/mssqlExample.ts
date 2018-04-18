import * as Sequelize from 'sequelize';
import { sequelize } from '../instances/sequelize';

export const User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING,
    },
    lastName: {
        type: Sequelize.STRING,
    },
});
