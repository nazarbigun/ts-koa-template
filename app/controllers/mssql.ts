import * as Sequelize from 'sequelize';
import { User } from '../models/mssqlExample';

export const sequelize = new Sequelize('mssql://user:pass@localhost:5432/dbname');

async function connect(): Promise<void> {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (err) {
        console.error('Unable to connect to the database:', err);
    }
}

export async function getData(ctx): Promise<void> {
    try {
        await connect();
        const users = await User.findAll();
        ctx.body = users;
        return users;
    } catch (err) {
        console.error('Could not get use data', err);
        ctx.body = err.message;
    }
}

