'use strict';
module.exports = (sequelize, DataTypes) => {
  var submission = sequelize.define('submission', {
    plagiarism_score: DataTypes.INTEGER,
    student_id: DataTypes.STRING,
    file_hash: DataTypes.STRING,
    assignment_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return submission;
};