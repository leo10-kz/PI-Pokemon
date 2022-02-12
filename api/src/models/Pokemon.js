const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
      id: {
      type: DataTypes.UUID,
      default:DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    nombre:{
      type:DataTypes.STRING,
      allowNull:false
    },
    vida:{
       type:DataTypes.STRING
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
