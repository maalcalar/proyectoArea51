/**
 * SesionController
 *
 * @description :: Server-side logic for managing sesions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	iniciar: function(req,res){
		var usuario = req.body.usuario,
			contrasena = req.body.contrasena;

		/* Revisar si se ha escrito el usuario y la contraseña */
		if(!usuario || !contrasena)
		{
			var error = [{nombre: "sinUsuarioContrasena", mensaje: "No se ha escrito el usuario ni la contraseña."}];
			req.session.flash = {
				err: error
			};
			res.redirect("/");
		}

		/* Revisar si existe el usuario escrito */
		Usuarios
			.findByUsuario(usuario)
			.then(function(reg){
				if(reg.length)
				{
					/* Comprobar la contraseña */
					if(reg[0].contrasena == contrasena)
					{
							req.session.authenticated = true;
							req.session.User = reg[0];
							req.session.administrador = reg[0].administrador;
							res.redirect("/resumen");
					}
					else
					{
						var error = [{nombre: "contrasenaIncorrecta", mensaje: "La contraseña escrita no es correcta."}];
						req.session.flash = {
							err: error
						};
						res.redirect("/");		
					}
				}
				else
				{
					var error = [{nombre: "usuarioIncorrecto", mensaje: "El usuario escrito no existe."}];
					req.session.flash = {
						err: error
					};
					res.redirect("/");
				}
			})
			.catch(function(err){
				res.negotiate(err);
			});


	},

	cerrar: function(req, res){
		req.session.destroy();

		res.redirect("/");
	}
};

