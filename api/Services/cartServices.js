const cartModel = require("../Models/cartModel");
const productModel = require("../Models/ProductModel");

module.exports = {
  addToCart: async (body) => {
    try {
      const productData = await productModel.getProductById(body.productId);
      const cartData = await cartModel.getCartById(body.userId);
      const cartItem = await cartModel.getCartItemBy(
        productData.id,
        cartData.id
      );
    } catch {}
  },
};
