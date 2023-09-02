const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../../bin/dbConnection");

class cartHasProducts extends Model {}

cartHasProducts.init(
    {
        id:{
            primaryKey:true,
            autoIncrement:true,
            type:DataTypes.INTEGER,
        },
        quantity:{
            allowNull:false,
            type:DataTypes.INTEGER,
        },
        total:{
            allowNull:false,
            type:DataTypes.INTEGER,
        },
    },
    {
        sequelize,
        timestamps:true,
        paranoid:true,
        modelName:"cartHasProducts"
    }
);
module.exports = cartHasProducts;