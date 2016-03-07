/**
 * UsuariosproyectosController
 *
 * @description :: Server-side logic for managing usuariosproyectos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	listar: function(req, res){
		UsuariosProyectos
			.find()
			.then(function(regs){
				res.json(regs);
			})
			.catch(function(err){
				res.negotiate(err);
			});
	},

	crear: function(req, res){
		var datos = req.body;
		console.log(datos);
		UsuariosProyectos
			.create(datos)
			.then(function(reg){
				res.ok();
			})
			.catch(function(err){
				res.negotiate(err);
			});
	},

	/*editar: function(req, res){
		var id = req.params.id;

		Usuarios
			.find()
			.where({id_usuario: id})
			.then(function(reg){
				res.json(reg);
			})
			.catch(function(err){
				res.negotiate(err);
			});
	},*/

	actualizar: function(req, res){
		var id = req.params.id,
			datos = req.body;

		UsuariosProyectos
			.update({id: id}, datos)
			.then(function(reg){
				res.ok();
			})
			.catch(function(err){
				res.negotiate(err);
			});
	},

	eliminar: function(req, res){
		var id = req.params.id;

		UsuariosProyectos
			.destroy()
			.where({id: id})
			.then(function(reg){
				res.ok();
			})
			.catch(function(err){
				res.negotiate(err);
			});
	},

	eliminarproyecto: function(req, res){
		var id = req.params.id;

		UsuariosProyectos
			.destroy()
			.where({proyecto: id})
			.then(function(reg){
				res.ok();
			})
			.catch(function(err){
				res.negotiate(err);
			});
	},

	eliminarusuario: function(req, res){
		var id = req.params.id;

		UsuariosProyectos
			.destroy()
			.where({usuario: id})
			.then(function(reg){
				res.ok();
			})
			.catch(function(err){
				res.negotiate(err);
			});
	}
};

