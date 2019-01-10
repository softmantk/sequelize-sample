'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   queryInterface.addColumn('Users', 'gender', {
      type : Sequelize.STRING
    })
       /*.then(function (data) {
           return queryInterface.addColumn('Users', 'gender', {
               type : Sequelize.STRING
           })
       })*/
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
     return  queryInterface.removeColumn('Users', 'gender')
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
