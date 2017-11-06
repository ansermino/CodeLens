'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('plagiarism_tuples', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      student_a: {
        type: Sequelize.INTEGER,
        allowNull: false,
        notEmpty: false
      },
      student_b: {
        type: Sequelize.INTEGER,
        allowNull: false,
        notEmpty: false
      },
      plagiarism_score: {
        type: Sequelize.INTEGER,
        allowNull: false
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
    return queryInterface.dropTable('plagiarism_tuples');
  }
};