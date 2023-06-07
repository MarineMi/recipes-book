"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: "user_id" });
    }
  }
  Recipe.init(
    {
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      recipe: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Recipe",
    }
  );
  return Recipe;
};
