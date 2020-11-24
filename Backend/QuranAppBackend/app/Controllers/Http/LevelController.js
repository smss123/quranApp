"use strict";

class LevelController {
  async index({ request, response, view }) {
    //Route.get(url, 'UserController.index')
    return view.render("Levels.index");
  }

  async Create() {}

  async Update() {}

  async Remove() {}

  async Details() {}
}

module.exports = LevelController;
