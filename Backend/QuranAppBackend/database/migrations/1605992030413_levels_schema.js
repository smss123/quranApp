"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class LevelsSchema extends Schema {
  up() {
    this.create("levels", (table) => {
      // alter table
      table.increments();
      table.string("name");
      table.timestamps();
    });
  }

  down() {
    this.drop("levels");
  }
}

module.exports = LevelsSchema;
