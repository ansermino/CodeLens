'use strict';
module.exports = (sequelize, DataTypes) => {
  var plagiarism_tuples = sequelize.define('plagiarism_tuples', {
    submission_a: DataTypes.INTEGER,
    submission_b: DataTypes.INTEGER,
    plagiarism_score: DataTypes.INTEGER,
    assignment_id: DataTypes.INTEGER,
    lines_1: DataTypes.ARRAY(DataTypes.INTEGER),
    lines_2: DataTypes.ARRAY(DataTypes.INTEGER)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return plagiarism_tuples;
};