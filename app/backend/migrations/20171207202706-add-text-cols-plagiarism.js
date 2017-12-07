'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    queryInterface.addColumn('plagiarism_tuples', 'text_1', {
      type: Sequelize.TEXT
    });

    queryInterface.addColumn('plagiarism_tuples', 'text_2', {
      type: Sequelize.TEXT
    })


  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    queryInterface.removeColumn('plagiarism_tuples', 'text_1');
    queryInterface.removeColumn('plagiarism_tuples', 'text_2');
  }
};
