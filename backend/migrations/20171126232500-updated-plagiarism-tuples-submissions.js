'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
    Add altering commands here.
    Return a promise to correctly handle asynchronicity.

    Example:
    return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    queryInterface.renameColumn('plagiarism_tuples', 'student_a', 'submission_a', {
        type: Sequelize.INTEGER,
        references: {
            model: 'submissions',
            key: 'id'
        }
    });

    queryInterface.renameColumn('plagiarism_tuples', 'student_b', 'submission_b', {
        type: Sequelize.INTEGER,
        references: {
            model: 'submissions',
            key: 'id'
        }
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
