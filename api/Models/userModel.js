const { models } = require("../Models/index");
const { Op } = require("sequelize");

module.exports = {
  createUser: async (body) => {
    try {
      return await models.User.create({ ...body });
    } catch (err) {
      return error;
    }
  },
  getAllUser: async (body) => {
    try {
      const colName = query.colName ? query.colName : "id";
      const orderValue = query.orderValue ? query.orderValue : " ASC";
      return await models.User.findAndCountAll({
        where: [
          {
            ...(query.fname
              ? { fname: { [Op.substring]: query.fname } }
              : true),
          },
          { ...(query.lname ? { lname: query.lname } : true) },
          { ...(query.email ? { email: query.email } : true) },
          { ...(query.roleId ? { roleId: query.roleId } : true) },
        ],
        attributes: {
          exclude: ["password", "createdAt", "updatedAt", "deletedAt"],
        },
        include: [
          {
            model: models.Cart,
            attributes: {
              exclude: ["createdAt", "updatedAt", "deletedAt"],
            },
          },
          { model: models.Role, attributes: ["role"] },
        ],
        // order: [colName, orderValue],
        limit: query.limit,
        offset: offset,
      });
    } catch (err) {
      return error;
    }
  },

  getUserByEmail: async (email) => {
    try {
      return await models.User.findOne({
        where: { email: email },
        attributes: {
          exclude: ["password"],
        },
      });
    } catch (err) {
      return error;
    }
  },

  getUserById: async (user) => {
    try {
      return await models.User.findOne({
        where: { id: id },
      });
    } catch (err) {
      return error;
    }
  },
  updateUser: async (body) => {
    try {
      return await models.User.update(
        {
          ...body,
        },
        {
          where: { id: body.id },
        }
      );
    } catch (err) {
      return error;
    }
  },
  deleteUser: async (body) => {
    try {
      return await models.User.destroy({
        id: id,
      });
    } catch (err) {}
  },
};
