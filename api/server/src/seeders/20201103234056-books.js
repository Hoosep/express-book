'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'Book One',
        price: '$9.99',
        description: 'Descripcion Book One',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Book Two',
        price: '$10.99',
        description: 'Descripcion Book Two',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Book Three',
        price: '$11.99',
        description: 'Descripcion Book Three',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Books');
  }
};
