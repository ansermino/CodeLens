'use strict';
module.exports = (sequelize, DataTypes) => {
  var plagiarism_tuples = sequelize.define('plagiarism_tuples', {
    student_a: DataTypes.INTEGER,
    student_b: DataTypes.INTEGER,
    plagiarism_score: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return plagiarism_tuples;
};