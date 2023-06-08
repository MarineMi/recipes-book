const router = require("express").Router();
const axios = require("axios");
const { Recipe } = require("../../db/models");
const Favorit = require("../../components/Favorit");
const MainPage = require("../../components/MainPage");

router.get("/", async (req, res) => {
  try {
    const dbRec = await Recipe.findAll({
      raw: true,
      where: { user_id: req.session.userId },
    });
    async function processArray(array) {
      const promises = array.map(async (el) => {
        const {
          data: {
            meals: { 0: data },
          },
        } = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${el.idMeal}`
        );
        return data;
      });
      const result = await Promise.all(promises);
      return result;
    }
    let alldeals = await processArray(dbRec);

    res.send(res.renderComponent(MainPage, { title: "main", alldeals }));
  } catch ({ message }) {
    res.json({ message });
  }
});
module.exports = router;
