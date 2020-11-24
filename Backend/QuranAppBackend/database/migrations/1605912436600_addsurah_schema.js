"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AddsurahSchema extends Schema {
  up() {
    this.create("surahs", (table) => {
      table.increments();
      table.string("Sequence");
      table.string("numberOfVerses");
      table.string("nameShort");
      table.string("nameLong");
      table.string("juz");
      table.string("page");
      table.boolean("Issajda");
      table.string("manzil");
      table.string("ruku");
      table.timestamps();
    });
  }

  down() {
    this.drop("surahs");
  }
}

module.exports = AddsurahSchema;
