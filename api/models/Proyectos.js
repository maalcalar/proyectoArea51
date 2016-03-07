/**
 * Proyectos.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  tableName: "tb_proyectos",

  attributes: {
  	id_proyecto: {
  		primaryKey: true,
  		type: "integer",
  		autoIncrement: true,
  		unique: true
  	},

  	nombre: {
  		type: "string",
  		required: true
  	},

  	inicio: {
  		type: "date",
  		required: true
  	},

  	fin: {
  		type: "date",
  		required: true
  	},

    activo: {
  		type: "boolean",
  		defaultsTo: false
  	},

  	descripcion: {
  		type: "string",
  		size: 5000
  	},

    usuarios: {
      collection: "UsuariosProyectos",
      via: "proyecto",
    }
  }
};

