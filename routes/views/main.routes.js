const router = require("express").Router();
const MainPage = require("../../components/MainPage");
const { Recipe } = require("../../db/models");

router.get("/", (req, res) => {
  try {
    const SEARCH_URL = "https://www.themealdb.com/api/json/v1/1/search.php";
    const letter = "k";
    fetch(`${SEARCH_URL}?f=${letter}`)
      .then((response) => response.json())
      .then((data) => {
        let alldeals = data.meals.slice(1);
        res.send(res.renderComponent(MainPage, { title: "main", alldeals }));
      })
      .catch((error) => {
        console.error(error);
      });
  } catch ({ message }) {
    res.json(message);
  }
});

router.post("/:idPP", async (req, res) => {
  const { idPP } = req.params;
  const addRec = await Recipe.create({
    user_id: req.session.userId,
    recipe: idPP,
  });
});


module.exports = router;
