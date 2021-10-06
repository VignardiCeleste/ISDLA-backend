'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pupil extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Pupil.init({
    user: DataTypes.STRING,
    password: DataTypes.STRING,
    document_type: DataTypes.STRING,
    document_number: DataTypes.STRING,
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    gender: DataTypes.STRING,
    date_birth: DataTypes.DATE,
    nationality: DataTypes.STRING,
    marital_status: DataTypes.STRING,
    email: DataTypes.STRING,
    personal_phone: DataTypes.STRING,
    cell_phone: DataTypes.STRING,
    father_education: DataTypes.STRING,
    mother_education: DataTypes.STRING,
    country: DataTypes.STRING,
    province: DataTypes.STRING,
    location: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.STRING,
    floor: DataTypes.STRING,
    department: DataTypes.STRING,
    postal_code: DataTypes.STRING,
    picture: DataTypes.STRING,
    img_identification: DataTypes.STRING,
    certificate_studies: DataTypes.STRING,
    approved_subjects: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pupil',
  });
  return Pupil;
};