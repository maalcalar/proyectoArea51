/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  
  '/': {
    controller: "VistasController",
    action: "inicio"
  },
  

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

  'post /validar': {
    controller: "SesionController",
    action: "iniciar"
  },

  '/resumen': {
    controller: "VistasController",
    action: "resumen"
  },

  '/verproyectos': {
    controller: "VistasController",
    action: "proyectos"
  },

  "/verusuarios": {
    controller: "VistasController",
    action: "usuarios"
  },

  "/asignarhoras": {
    controller: "VistasController",
    action: "asignarhoras"
  },

  "/reporteusuarios": {
    controller: "VistasController",
    action: "reporteusuarios"
  },

  "/reporteproyectos": {
    controller: "VistasController",
    action: "reporteproyectos"
  },

  "/hojadetrabajo/:id": {
    controller: "VistasController",
    action: "trabajo"
  },

  "/logout": {
    controller: "SesionController",
    action: "cerrar"
  },

  "/facebook/login": {
    controller: "VistasController",
    action: "facebook"
  },

  "/facebook/callback": {
    controller: "VistasController",
    action: "facebookCB"
  },

  "/google/login": {
    controller: "VistasController",
    action: "google"
  },

  "/google/callback": {
    controller: "VistasController",
    action: "googleCB"
  },

  "/twitter/login": {
    controller: "VistasController",
    action: "twitter"
  },

  "/twitter/callback": {
    controller: "VistasController",
    action: "twitterCB"
  },

  "/github/login": {
    controller: "VistasController",
    action: "github"
  },

  "/github/callback": {
    controller: "VistasController",
    action: "githubCB"
  },

  /**************************************************************************/

  "get /usuarios": {
    controller: "UsuariosController",
    action: "listar"
  },

  "post /usuarios": {
    controller: "UsuariosController",
    action: "crear"
  },

  "get /usuarios/:id": {
    controller: "UsuariosController",
    action: "editar"
  },

  "put /usuarios/:id": {
    controller: "UsuariosController",
    action: "actualizar"
  },

  "delete /usuarios/:id": {
    controller: "UsuariosController",
    action: "eliminar"
  },

  'get /proyectos': {
    controller: 'ProyectosController',
    action: 'listar'
  },

  "post /proyectos": {
    controller: "ProyectosController",
    action: "insertar"
  },

  "get /proyectos/:id": {
    controller: "ProyectosController",
    action: "editar"
  },

  "put /proyectos/:id": {
    controller: "ProyectosController",
    action: "actualizar"
  },

  "delete /proyectos/:id": {
    controller: "ProyectosController",
    action: "eliminar"
  },

  "put /finproyecto/:id": {
    controller: "ProyectosController",
    action: "finalizar"
  },

  "get /usuariosproyectos": {
    controller: "UsuariosproyectosController",
    action: "listar"
  },

  "post /usuariosproyectos": {
    controller: "UsuariosproyectosController",
    action: "crear"
  },

  /*"get /usuariosproyectos/:id": {
    controller: "UsuariosproyectosController",
    action: "editar"
  },*/

  "put /usuariosproyectos/:id": {
    controller: "UsuariosproyectosController",
    action: "actualizar"
  },

  "delete /usuariosproyectos/:id": {
    controller: "UsuariosproyectosController",
    action: "eliminar"
  },

  "delete /usuariosproyectos/proyecto/:id": {
    controller: "UsuariosproyectosController",
    action: "eliminarproyecto"
  },

  "delete /usuariosproyectos/usuario/:id": {
    controller: "UsuariosproyectosController",
    action: "eliminarusuario"
  }

};
