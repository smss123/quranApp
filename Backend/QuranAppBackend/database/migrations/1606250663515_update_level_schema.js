"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UpdateLevelSchema extends Schema {
  up() {
    this.table("levels", (table) => {
      // alter table
      table.bigInteger("LevelWork");
      table.string("Description");
      table.string("Icon");
      table.string("HeaderBanner");
      table.string("color");
    });
  }

  down() {
    this.table("levels", (table) => {
      // reverse alternations
    });
  }
}

module.exports = UpdateLevelSchema;
