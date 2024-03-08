const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
   // En Mayúsculas y singular      // en minúsculas y singular
const Users = sequelize.define('users', {
    // Definimos las columnas aquí
    first_name: {
        type: DataTypes.STRING(50)
        // allowNull por defecto esta en true
    },
    last_name: {
        type: DataTypes.STRING(50)
        // allowNull por defecto esta en true
    },
    email: {
        type: DataTypes.STRING(50),
        unique: true
    },
    password: {
        type: DataTypes.STRING(50)
    },
    birthday: {
        type: DataTypes.DATEONLY
    }
});

module.exports = Users;