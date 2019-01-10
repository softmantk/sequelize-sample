'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        /*uuid :{
            type: DataTypes.UUID,
            primaryKey:true
        },*/
        name: DataTypes.STRING,
        // gender: DataTypes.STRING,
        email: DataTypes.STRING,
        age: DataTypes.INTEGER,
        address: {
            type: DataTypes.STRING,
        }
    }, {});
    User.associate = function (models) {
        // associations can be defined here
    };
    return User;
};
