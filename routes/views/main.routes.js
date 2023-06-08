const router = require("express").Router();
const MainPage = require("../../components/MainPage");
const { Recipe } = require("../../db/models");

router.get("/", (req, res) => {
  let possible = "abcdefghijklmnopqrstuvwxyz";
  let k = possible.charAt(Math.floor(Math.random() * possible.length));

  res.redirect(`./${k}`);
});

router.get("/:Fodid", (req, res) => {
  try {
    const { Fodid } = req.params;
    const letter = Fodid;
    const SEARCH_URL = "https://www.themealdb.com/api/json/v1/1/search.php";
    let parram = "f";
    if (letter.length > 1) {
      parram = "s";
    }
    fetch(`${SEARCH_URL}?${parram}=${letter}`)
      .then((response) => response.json())
      .then((data) => {
        let alldeals = data.meals;
        if (alldeals == null) {
          res.redirect(`./`);
        } else {
          res.send(res.renderComponent(MainPage, { title: "main", alldeals }));
        }
      })
      .catch((error) => {
        console.error(error);
      });
  } catch ({ message }) {
    res.json(message);
  }
});

router.post("/favorite", async (req, res) => {
  const { id } = req.body;
  const addRec = await Recipe.create({
    user_id: req.session.userId,
    idMeal: id,
  });
});

router.post("/", (req, res) => {
  res.redirect(`./${req.body.name}`);
});

module.exports = router;
