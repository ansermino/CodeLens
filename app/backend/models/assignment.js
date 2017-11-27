'use strict';
module.exports = (sequelize, DataTypes) => {
  var assignment = sequelize.define('assignment', {
    title: DataTypes.STRING,
    plagiarism_threshold: DataTypes.INTEGER,
    folder_hash: DataTypes.STRING,
    starter_hash: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return assignment;
};