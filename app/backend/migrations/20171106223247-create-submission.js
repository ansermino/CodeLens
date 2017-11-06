'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('submissions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      plagiarism_score: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      student_id: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: false,
      },
      file_hash: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: false
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('submissions');
  }
};