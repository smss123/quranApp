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
  async GetSurahById({ request, response, params }) {
    const query = params.id;
    const data = quran[query - 1];
    return data;
  }
  async getAyahFromSurah({ request, response, params }) {
    const { id, ayah } = params;
    const checkSurah = quran[id - 1];
    if (!checkSurah) {
      return response.status(404).send("No Surah Found");
    }
    const checkAyah = checkSurah.verses[ayah - 1];
    if (!checkAyah) {
      return response.status(404).send({
        code: 404,
        status: "Not Found.",
        message: `Ayah ${ayah} in surah ${id} is not found.`,
        data: {},
      });
    }

    const dataSurah = { ...checkSurah };
    delete dataSurah.verses;
    const data = { ...checkAyah, id: dataSurah };
    return response.status(200).send({
      code: 200,
      status: "OK.",
      message: "Success fetching ayah",
      data,
    });
    return params.ayah;
  }
}

module.exports = SurahController;
