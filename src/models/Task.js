const { Sequelize } = require("sequelize/types");

module.exports = (sequelize, DataType) => {

    const Task = sequelize.define('Task', {
        id:{
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        title: {
            type:Sequelize.STRING,
            allowNull: false
        },
        description: Sequelize.STRING,
        done: {
            type: Sequelize.BOOLEAN,
            defaultValue: false   
        },
        deleted: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    },
    {
        tableName: "tasks"
    });
    
    return Task;
  }