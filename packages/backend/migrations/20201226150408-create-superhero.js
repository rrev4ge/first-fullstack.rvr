'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Superheros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nickname: {
        type: Sequelize.STRING
      },
      realName: {
        type: Sequelize.STRING
      },
      originDescription: {
        type: Sequelize.STRING
      },
      superpowers: {
        type: Sequelize.ARRAY
      },
      catchPhrase: {
        type: Sequelize.STRING
      },
      images: {
        type: Sequelize.ARRAY
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Superheros');
  }
};