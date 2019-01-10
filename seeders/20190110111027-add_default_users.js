'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
            name: 'admin',
            email: 'admin@admin.com',
            age: 15,
            address: "india"
        }])
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkInsert('People', [{
            name: 'John Doe',
            isBetaMember: false
          }], {});
        */
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', /*{
            [Sequelize.Op.or]: [{name: 'admin'}]
        }*/ null, {})
    }
};
