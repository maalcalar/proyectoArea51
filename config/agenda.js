var Agenda = require("agenda");

var agenda = new Agenda();
agenda.database("mongodb://127.0.0.1/proyecto");
agenda.processEvery("1 minute");

agenda.define("tarea consola", function(jobs, done) {
	var fecha = new Date();

	Proyectos
		.update(
			{
				inicio : {"<=" : fecha},
				fin : {">=" : fecha}
			},
			{activo : true}
		)
		.then(function(regs){
			/*console.log(regs);*/
		})
		.catch(function(err){
			console.log(err);
		});

	done();
});

agenda.on("ready", function(){
	agenda.every("45 seconds", "tarea consola");

	agenda.start();
})