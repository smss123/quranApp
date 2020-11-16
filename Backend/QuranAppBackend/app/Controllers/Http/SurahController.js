"use strict";
const { data: quran } = require("../../../Data/data.json");

class SurahController {
  async Surah({ request, response }) {
    const data = quran.map((item) => {
      const surah = { ...item };
      delete surah.verses;
      delete surah.preBismillah;
      return surah;
    });
    return data;
  }
}

module.exports = SurahController;
