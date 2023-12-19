"use strict";
const { Model } = require("sequelize");
//your interface
interface UserAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  //using UserAttributes as generics and implement that
  class User extends Model<UserAttributes> implements UserAttributes {
    //make thisi prop as your interface
    id!: number;
    name!: string;
    email!: string;
    password!: string;

    associate(models: any) {
      // define association here
      User.belongsToMany(models.Project,{
        throgh : 'ProjectAssignment'
      })
    }
  }
  User.init(
    {
      id: {
        type:DataTypes.Number,
        allowNul: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNul: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNul: false,
        uniqe: true
      },
      password: {
        type: DataTypes.STRING,
        allowNul: false,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
