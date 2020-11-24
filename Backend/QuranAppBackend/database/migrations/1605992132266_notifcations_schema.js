"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class NotifcationsSchema extends Schema {
  up() {
    this.create("notifcations", (table) => {
      table.increments();
      table.timestamps();
    });
  }

  down() {
    this.drop("notifcations");
  }
}

module.exports = NotifcationsSchema;
