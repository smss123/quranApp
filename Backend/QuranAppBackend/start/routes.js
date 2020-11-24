"use strict";

const { route } = require("@adonisjs/framework/src/Route/Manager");

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", "InfoController.Index");
Route.get("api/surah", "SurahController.Surah");
Route.get("api/surah/:id", "SurahController.GetSurahById");
Route.get("api/surah/:id/:ayah", "SurahController.getAyahFromSurah");

/* Administrator Part */
route.get("admin/levels/list", "LevelController.index");
