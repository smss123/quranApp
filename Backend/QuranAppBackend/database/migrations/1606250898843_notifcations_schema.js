"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class NotifcationsSchema extends Schema {
  up() {
    this.table("notifcations", (table) => {
      // alter table
      table.string("title");
      table.string("description");
      table.string("icon");
      table.string("sound");
      table.integer("UserId");
    });
  }

  down() {
    this.table("notifcations", (table) => {
      // reverse alternations
    });
  }
}

module.exports = NotifcationsSchema;
