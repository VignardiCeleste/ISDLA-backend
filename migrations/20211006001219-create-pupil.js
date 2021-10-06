'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pupils', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      document_type: {
        type: Sequelize.STRING
      },
      document_number: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      surname: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      date_birth: {
        type: Sequelize.DATE
      },
      nationality: {
        type: Sequelize.STRING
      },
      marital_status: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      personal_phone: {
        type: Sequelize.STRING
      },
      cell_phone: {
        type: Sequelize.STRING
      },
      father_education: {
        type: Sequelize.STRING
      },
      mother_education: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      province: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      street: {
        type: Sequelize.STRING
      },
      number: {
        type: Sequelize.STRING
      },
      floor: {
        type: Sequelize.STRING
      },
      department: {
        type: Sequelize.STRING
      },
      postal_code: {
        type: Sequelize.STRING
      },
      picture: {
        type: Sequelize.STRING
      },
      img_identification: {
        type: Sequelize.STRING
      },
      certificate_studies: {
        type: Sequelize.STRING
      },
      approved_subjects: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Pupils');
  }
};