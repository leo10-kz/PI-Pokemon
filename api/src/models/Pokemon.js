const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
      id: {
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV1,
      primaryKey: true,
     //autoIncrement:true
    },
    name:{
      type:DataTypes.STRING,
      allowNull:false
    },
    vida:{
       type:DataTypes.INTEGER
    },
    fuerza:{
      type:DataTypes.INTEGER,
    },
    defenza:{
      type:DataTypes.INTEGER
    },
    velocidad:{
      type:DataTypes.INTEGER
    },
    altura:{
      type:DataTypes.DECIMAL
    },
    peso:{
      type:DataTypes.DECIMAL
    }


  });
};
