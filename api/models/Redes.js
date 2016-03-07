/**
 * Redes.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  tableName: "tb_redes",

  attributes: {
  	id_red: {
  		primaryKey: true,
  		type: "integer",
  		autoIncrement: true,
  		unique: true
  	},

    id: {
      type: "string",
      size: 500
    },

  	proveedor: "string",

  	dispName: "string",

  	foto: {
  		type: "string",
  		size: 2000
  	},

    usuario: {
      model: "Usuarios"
    }
  }
};

