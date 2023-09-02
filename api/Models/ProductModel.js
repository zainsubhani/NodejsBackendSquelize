const { models } = require("./index");
module.exports = {
  createProduct: async () => {
    try {
      return await models.Products.create({ ...body });
    } catch (err) {
      return error;
    }
  },

  getProductById: async () => {
    try {
      return await models.Products.findByPk(id);
    } catch (err) {
      return error;
    }
  },
};
