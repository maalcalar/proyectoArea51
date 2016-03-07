/**
 * ProyectosController
 *
 * @description :: Server-side logic for managing proyectos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	listar: function(req,res){
		Proyectos
			.find()
			.populate("usuarios")
			.then(function(regs){
				res.json(regs);
			})
			.catch(function(err){
				res.negotiate(err);
			});
	},

	insertar: function(req, res) {
		var nombre = req.body.nombre;
		var inicio = req.body.inicio;
		var fin = req.body.fin;
		var descripcion = req.body.descripcion;

		var data = {nombre: nombre, inicio: new Date(inicio), fin: new Date(fin), descripcion: descripcion};

		Proyectos
			.create(data)
			.then(function(regs){
				res.ok();
			})
			.catch(function(err){
				res.negotiate(err);
			});
	},

	editar: function(req, res){
		var id = req.params.id;

		Proyectos
			.find()
			.where({id_proyecto: id})
			.then(function(regs){
				res.json(regs);
			})
			.catch(function(err){
				res.negotiate(err);
			});
	},

	actualizar: function(req, res){
		var nombre = req.body.nombre,
			inicio = req.body.inicio,
			fin = req.body.fin,
			descripcion = req.body.descripcion,
			id = req.params.id;

		var filtro = {id_proyecto: id},
			data = {nombre: nombre, inicio: new Date(inicio), fin: new Date(fin), descripcion: descripcion};

		Proyectos
			.update(filtro,data)
			.then(function(regs){
				res.ok();
			})
			.catch(function(err){
				res.negotiate(err);
			});
	},

	finalizar: function(req, res){
		var id = req.params.id,
			termino = new Date(),
			activo = false;

		var filtro = {id_proyecto: id},
			data = {termino: termino, activo: activo};

		Proyectos
			.update(filtro,data)
			.then(function(regs){
				res.ok();
			})
			.catch(function(err){
				res.negotiate(err);
			});
	},

	eliminar: function(req, res){
		var id = req.params.id;

		var filtro = {id_proyecto: id};

		Proyectos
			.destroy()
			.where(filtro)
			.then(function(regs){
				res.ok();
			})
			.catch(function(err){
				res.negotiate(err);
			});
	}
};

