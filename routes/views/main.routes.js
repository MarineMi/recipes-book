const router = require("express").Router();
const MainPage = require("../../components/MainPage");
const InsidePage = require("../../components/InsidePage");
const axios = require("axios");

const { Recipe } = require("../../db/models");

router.get("/", (req, res) => {
  let possible = "abcdefghjklmnopqrstuvwxz";
  let k = possible.charAt(Math.floor(Math.random() * possible.length));

  res.redirect(`./${k}`);
});

router.get("/info/:cookId", async (req, res) => {
  try {
    const { cookId } = req.params;

    const SEARCH_URL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

    fetch(`${SEARCH_URL}${cookId}`)
      .then((response) => response.json())
      .then((data) => {
        let alldeals = data.meals;
        if (alldeals == null) {
          res.redirect(`./`);
        } else {
          res.send(
            res.renderComponent(InsidePage, { title: "Info", alldeals })
          );
        }
      })
      .catch((error) => {
        console.error(error);
      });
  } catch ({ message }) {
    res.json({ message });
  }
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
  const asd = await Recipe.findOne({ raw: true, where: { idMeal: id } });
  if (!asd) {
    await Recipe.create({
      user_id: req.session.userId,
      idMeal: id,
    });
  }
});

router.post("/", (req, res) => {
  res.redirect(`./${req.body.name}`);
});

module.exports = router;
