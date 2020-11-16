"use strict";

class InfoController {
  async Index({ request, response }) {
    return {
      welcome: "Welcome To Quran App Api",
      Api: {
        SurahList: "api/surah",
      },
    };
  }
}

module.exports = InfoController;
