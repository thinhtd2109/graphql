import { Model, DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import sequelize from '../services/database.service';
class User extends Model {
  id!: string;
  email!: string;
  username!: string;
  password!: string;
  created: string;
  updated: string;
  deleted: boolean;
  created_by: string;
  updated_by: string;
  deleted_by: string;
};
User.init({
  id: {
    type: DataTypes.UUIDV4,
    allowNull: false,
    unique: true,
    defaultValue: () => uuidv4(),
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  created: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updated: {
    type: DataTypes.STRING,
  },
  deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  created_by: {
    type: DataTypes.UUID,
  },
  updated_by: {
    type: DataTypes.UUID,
  },
  deleted_by: {
    type: DataTypes.UUID
  }
}, { sequelize: sequelize, timestamps: true });

export default User;