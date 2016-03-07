/**
 * VistasController
 *
 * @description :: Server-side logic for managing vistas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var passport = require('passport');

module.exports = {
	inicio: function(req, res){
		if(req.session.authenticated)
		{
			res.redirect("/resumen");
		}
		else
		{
			res.view("inicio",{layout: false});
		}
	},

	resumen: function(req, res){
		if(req.session.administrador)
		{
			res.view("adminResumen",{layout: "adminLayout", vista: "resumen"});
		}
		else
		{
			res.view("userResumen",{layout: "userLayout", vista: "resumen", id_usuario : req.session.User.id_usuario});
		}
	},

	proyectos: function(req, res){
		if(req.session.administrador)
		{
			res.view("proyectos",{layout: "adminLayout", vista: "proyectos"});
		}
		else
		{
			res.view("userResumen",{layout: "userLayout", vista: "resumen"});
		}
	},

	usuarios: function(req, res){
		if(req.session.administrador)
		{
			res.view("usuarios",{layout: "adminLayout", vista: "usuarios"});
		}
		else
		{
			res.view("userResumen",{layout: "userLayout", vista: "resumen"});
		}
	},

	asignarhoras: function(req, res) {
		if(req.session.administrador)
		{
			res.view("asignarhoras",{layout: "adminLayout", vista: "asignarhoras"});
		}
		else
		{
			res.view("userResumen",{layout: "userLayout", vista: "resumen"});
		}
	},

	reporteusuarios: function(req, res){
		if(req.session.administrador)
		{
			res.view("reporteusuarios",{layout: "adminLayout", vista: "reporteusuarios"});
		}
		else
		{
			res.view("userResumen",{layout: "userLayout", vista: "resumen"});
		}
	},

	reporteproyectos: function(req, res){
		if(req.session.administrador)
		{
			res.view("reporteproyectos",{layout: "adminLayout", vista: "reporteproyectos"});
		}
		else
		{
			res.view("userResumen",{layout: "userLayout", vista: "resumen"});
		}
	},

	trabajo: function(req, res){
		if(req.session.administrador)
		{
			res.view("adminResumen",{layout: "adminLayout", vista: "resumen"});
		}
		else
		{
			res.view("trabajo",{layout: "userLayout", vista: "trabajo", id_usuario : req.session.User.id_usuario, id_proyecto: req.params.id});
		}
	},

	facebook: function(req, res, next){
		passport.authenticate("facebook", { scope: 'email'}, function(err,userred){
			req.logIn(userred, function (err) {
				if(err)
				{
					req.session.flash = 'There was an error';
					res.redirect('/facebook/login');
				}
				else
				{
					req.session.userred = userred;
					res.redirect('/facebook/callback');
	        	}
	        });
		})(req, res, next);
	},

	facebookCB: function(req, res, next){
		var usuario,
			autenticado = req.session.authenticated;

		if(autenticado){usuario = req.session.User.id_usuario}

		passport.authenticate('facebook',
			function (req, res) {
				if(autenticado)
				{
					Redes
						.update({id:passport.datos.id},{usuario:usuario})
						.then(function(reg){
							
						})
						.catch(function(err){
							
						});
				}
				else
				{
					Redes
						.destroy({id:passport.datos.id,usuario:null})
						.then(function(reg){
							if(reg.length)
							{
								console.log("Existe");
							}
							else
							{
								console.log("No existe");
								autenticado = true;
							}
						})
						.catch(function(err){
							
						});
				}
			})(req, res, next);

		if(req.session.authenticated)
		{
			res.redirect("/resumen");
		}
		else
		{
			res.redirect("/");
		}
	},

	google: function(req, res, next){
		passport.authenticate("google", { scope: [
			'https://www.googleapis.com/auth/plus.login',
			'https://www.googleapis.com/auth/plus.profile.emails.read'] }, 
			function(err,userred){
			req.logIn(userred, function (err) {
				if(err)
				{
					req.session.flash = 'There was an error';
					res.redirect('/google/login');
				}
				else
				{
					req.session.userred = userred;
					res.redirect('/google/callback');
	        	}
	        });
		})(req, res, next);
	},

	googleCB: function(req, res, next){
		var usuario = req.session.User.id_usuario;
		passport.authenticate('google',
			function (req, res) {
				Redes
					.update({usuario:null},{usuario:usuario})
					.then(function(reg){
						
					})
					.catch(function(err){
						
					});
			})(req, res, next);

		if(req.session.authenticated)
		{
			res.redirect("/resumen");
		}
		else
		{
			res.redirect("/");
		}
	},

	twitter: function(req, res, next){
		passport.authenticate("twitter", { scope: 'email'}, function(err,userred){
			req.logIn(userred, function (err) {
				if(err)
				{
					req.session.flash = 'There was an error';
					res.redirect('/twitter/login');
				}
				else
				{
					req.session.userred = userred;
					res.redirect('/twitter/callback');
	        	}
	        });
		})(req, res, next);
	},

	twitterCB: function(req, res, next){
		var usuario = req.session.User.id_usuario;
		passport.authenticate('twitter',
			function (req, res) {
				Redes
					.update({usuario:null},{usuario:usuario})
					.then(function(reg){
						
					})
					.catch(function(err){
						
					});
			})(req, res, next);

		if(req.session.authenticated)
		{
			res.redirect("/resumen");
		}
		else
		{
			res.redirect("/");
		}
	},

	github: function(req, res, next){
		passport.authenticate("github", { scope: [
			'https://www.googleapis.com/auth/plus.login',
			'https://www.googleapis.com/auth/plus.profile.emails.read'] }, 
			function(err,userred){
			req.logIn(userred, function (err) {
				if(err)
				{
					req.session.flash = 'There was an error';
					res.redirect('/github/login');
				}
				else
				{
					req.session.userred = userred;
					res.redirect('/github/callback');
	        	}
	        });
		})(req, res, next);
	},

	githubCB: function(req, res, next){
		var usuario = req.session.User.id_usuario;
		passport.authenticate('github',
			function (req, res) {
				Redes
					.update({usuario:null},{usuario:usuario})
					.then(function(reg){
						
					})
					.catch(function(err){
						
					});
			})(req, res, next);

		if(req.session.authenticated)
		{
			res.redirect("/resumen");
		}
		else
		{
			res.redirect("/");
		}
	}
};

