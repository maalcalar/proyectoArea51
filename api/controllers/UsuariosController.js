/**
 * UsuariosController
 *
 * @description :: Server-side logic for managing usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	listar: function(req, res){
		Usuarios
			.find()
			.populate("proyectos")
			.populate("redes")
			.then(function(regs){
				res.json(regs);
			})
			.catch(function(err){
				res.negotiate(err);
			});
	},

	crear: function(req, res){
		var usuario = req.body.usuario,
			contrasena = req.body.contrasena,
			administrador = req.body.administrador,
			nombres = req.body.nombres,
			apellidoPaterno = req.body.apellidoPaterno,
			apellidoMaterno = req.body.apellidoMaterno;

		var datos = {	
						usuario: usuario,
						contrasena: contrasena,
						administrador: administrador,
						nombres: nombres,
						apellidoPaterno: apellidoPaterno,
						apellidoMaterno: apellidoMaterno
					};

		Usuarios
			.create(datos)
			.then(function(reg){
				res.ok();
			})
			.catch(function(err){
				res.negotiate(err);
			});
	},

	editar: function(req, res){
		var id = req.params.id;

		Usuarios
			.find()
			.where({id_usuario: id})
			.populate("proyectos")
			.populate("redes")
			.then(function(reg){
				res.json(reg);
			})
			.catch(function(err){
				res.negotiate(err);
			});
	},

	actualizar: function(req, res){
		var id = req.params.id,
			datos = req.body;

		Usuarios
			.update({id_usuario: id}, datos)
			.then(function(reg){
				res.ok();
			})
			.catch(function(err){
				res.negotiate(err);
			});
	},

	eliminar: function(req, res){
		var id = req.params.id;

		Usuarios
			.destroy()
			.where({id_usuario: id})
			.then(function(reg){
				res.ok();
			})
			.catch(function(err){
				res.negotiate(err);
			});
	},

	vincularRed: function(req,res){
		if(req.session.authenticated)
		{
			console.log("Se vinculará");
		}
		else
		{
			console.log("Primero se debe vincular a una cuenta");
		}
	}
};

