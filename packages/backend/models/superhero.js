'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Superhero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Superhero.init({
    nickname: {
      type:DataTypes.STRING,
      require: true,
      unique:true,
    },
    realName: {
      type: DataTypes.STRING,
      require: true,
    },
    originDescription: DataTypes.STRING,
    superpowers: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: []
    },
    catchPhrase: {
      type: DataTypes.STRING,
      require: true,
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: []
    }
    
  }, {
    sequelize,
    modelName: 'Superhero',
    underscored: true,
    tableName: 'superheroes'
  });
  return Superhero;
};