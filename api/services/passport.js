var passport = require('passport'),
	FacebookStrategy = require('passport-facebook').Strategy,
	GoogleStrategy = require('passport-google-oauth2').Strategy,
	/*TwitterStrategy = require('passport-twitter').Strategy,*/
	GithubStrategy = require('passport-github2').Strategy;

passport.serializeUser(function (user, done) {
	done(null, user);
});

passport.deserializeUser(function (user, done) {
	done(null, user);
});

passport.use(new FacebookStrategy({
	clientID: "1553564304934845",
	clientSecret: "0758987d48da72d57c5ce59b16595ade",
	callbackURL: "http://localhost:1337/facebook/callback",
	profileFields : ['id', 'displayName','photos']
}, function (accessToken, refreshToken, profile, done) {
	/*console.log("id: "+profile.id);
	console.log("proveedor: "+profile.provider);
	console.log("name: "+profile.displayName);
	console.log("photo: "+profile.photos[0].value);*/

	var datos = {
		id: profile.id,
		proveedor: profile.provider,
		dispName: profile.displayName,
		foto: profile.photos[0].value
	};

	passport.datos = datos;

	Redes
		.findOrCreate({id:datos.id},datos)
		.then(function(reg){
			done(null,profile);
		})
		.catch(function(err){
			done(null,false);
		});
}));

passport.use(new GoogleStrategy({
	clientID      : "67374085462-j25df0h3foomq3n5f2tpc15e3faurh4f.apps.googleusercontent.com",
    clientSecret    : "2h4NCYgXcUtHoJ6-gUINL0EF",
    callbackURL  : "http://localhost:1337/google/callback"
}, function (accessToken, refreshToken, profile, done) {

	var datos = {
		id: profile.id,
		proveedor: profile.provider,
		dispName: profile.displayName,
		foto: profile._json.image.url
	};

	Redes
		.findOrCreate({id:datos.id},datos)
		.then(function(reg){
			done(null,profile);
		})
		.catch(function(err){
			done(null,false);
		});
}));

/*passport.use(new TwitterStrategy({
	clientID      : "XfFnqLgD3cajhOld8eNxBLFPi",
    clientSecret    : "OlTkSxYCMSJWEcDYjG02JwK5yCUtm0LegEQr5t1zI5XS2la5si",
    callbackURL  : "http://localhost:1337/google/callback"
}, function (accessToken, refreshToken, profile, done) {

	var datos = {
		id: profile.id,
		proveedor: profile.provider,
		dispName: profile.displayName,
		foto: profile.photos[0].value
	};

	Redes
		.findOrCreate({id:datos.id},datos)
		.then(function(reg){
			done(null,profile);
		})
		.catch(function(err){
			done(null,false);
		});
}));*/

passport.use(new GithubStrategy({
	clientID      : "8bc610e6595aa0351228",
    clientSecret    : "7ec378e52d5e07d9afc3265b7b28654657d9cf6a",
    callbackURL  : "http://localhost:1337/google/callback"
}, function (accessToken, refreshToken, profile, done) {

	var datos = {
		id: profile.id,
		proveedor: profile.provider,
		dispName: profile.displayName,
		foto: profile._json.avatar_url
	};

	Redes
		.findOrCreate({id:datos.id},datos)
		.then(function(reg){
			done(null,profile);
		})
		.catch(function(err){
			done(null,false);
		});
}));