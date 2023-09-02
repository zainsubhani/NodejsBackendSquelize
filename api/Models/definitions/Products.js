const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../../bin/dbConnection");

class Products extends Model {}

Products.init({
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    productName: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    price: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    Quantity: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    size:{
        allowNull: false,
        type: DataTypes.STRING,
    },
    color:{
        allowNull: false,
        type: DataTypes.STRING
    },
   available: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: true,

    },
    isFeatured:{
        allowNull:false,
        type:DataTypes.BOOLEAN,
        defaultValue:false,
    }
},
{sequelize,timestamps:true,paranoid:true,modelName:"Products"});

module.exports=Products;


