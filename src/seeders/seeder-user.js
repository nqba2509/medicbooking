"use strict";

module.exports = {
  // email: DataTypes.STRING,
  //     firstName: DataTypes.STRING,
  //     lastName: DataTypes.STRING,
  //     address: DataTypes.STRING,
  //     gender: DataTypes.BOOLEAN,
  //     typeRole: DataTypes.STRING,
  //     keyRole: DataTypes.STRING,
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        email: "admin@gmail.com",
        firstName: "Anz",
        lastName: "Bankai",
        address: "VNA",
        gender: 1,
        typeRole: "ROLE",
        keyRole: "R1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
