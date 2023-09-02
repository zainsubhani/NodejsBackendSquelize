const sequelize = require("../../bin/dbConnection");

/// importing models

const {
  User,
  Cart,
  Role,
  Products,
  CartHasProducts,
} = require("./definitions/index");

// Relations starts here
// one to one relationship
//
User.hasOne(Cart, { foreignKey: "userId" });

Cart.belongsTo(User, { foreignKey: { name: "userId", allowNull: false } });
///
Role.hasMany(User, { foreignKey: "roleId" });

User.belongsTo(Role, {
  foreignKey: { name: "roleId", allowNull: false },
});

//
Cart.hasMany(CartHasProducts, { foreignKey: "cartid" });
CartHasProducts.belongsTo(Cart, {
  foreignKey: { name: "cartid", allowNull: false },
});

//
Products.hasMany(CartHasProducts, { foreignKey: "productsId" });
CartHasProducts.belongsTo(Products, {
  foreignKey: { name: "productId", allowNull: false },
});

// relation ends here

const models = { User, Cart, Role, Products, CartHasProducts };

const db = {};

db.sequelize = sequelize;
sequelize.models = models;

module.exports = { db, models };
