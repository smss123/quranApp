"use strict";

class InfoController {
  async Index({ request, response }) {
    return {
      welcome: "Welcome To Quran App Api",
      Api: {
        SurahList: "api/surah",
        GetSurahById: "api/surah/:id",
        GetAyah: "api/surah/:id/:ayah",
      },
      MadeBy: "Samer abd allah , smsssamer@live.com",
    };
  }
}

module.exports = InfoController;
