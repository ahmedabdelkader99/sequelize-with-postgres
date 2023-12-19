"use strict";
import { DataType, Model } from "sequelize";
interface AssignmentProjectAttributes {
  projectId: number;
  userId: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class AssignmentProject
    extends Model<AssignmentProjectAttributes>
    implements AssignmentProjectAttributes
  {
    projectId!: number;
    userId!: string;
    static associate(models: any) {
      // define association here
    }
  }
  AssignmentProject.init(
    {
      projectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId: {
        key: "id",
        type: DataTypes.string,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "AssignmentProject",
    }
  );
  return AssignmentProject;
};
