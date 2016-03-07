/**
 * Usuarios.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  tableName: "tb_usuarios",

  attributes: {
  	id_usuario: {
  		primaryKey: true,
  		type: "integer",
  		autoIncrement: true,
  		unique: true
  	},

  	usuario: {
  		type: "string",
  		required: true
  	},

  	contrasena: {
  		type: "string",
  		required: true
  	},

    administrador: {
      type: "boolean",
      defaultsTo: false
    },

  	nombres: {
  		type: "string",
  		required: true
  	},

  	apellidoPaterno: {
  		type: "string",
  		required: true
  	},

  	apellidoMaterno: {
  		type: "string",
  		required: true
  	},

  	redes: {
      collection: "Redes",
      via: "usuario"
    },

    proyectos: {
      collection: "UsuariosProyectos",
      via: "usuario"
    }
  }
};

