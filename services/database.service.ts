import { Sequelize } from 'sequelize';
const sequelize = new Sequelize(process.env.connection_string);
export default sequelize;
