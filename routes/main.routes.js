const router = require("express").Router();
const MainPage = require("../components/MainPage");



router.get("/", (req, res) => {
  try {
    const SEARCH_URL = "https://www.themealdb.com/api/json/v1/1/search.php";
    const letter = "f";
    fetch(`${SEARCH_URL}?f=${letter}`)
      .then((response) => response.json())
      .then((data) => {
        res.send();
        console.log(data);
        res.send(res.renderComponent(MainPage, { data }));
      })
      .catch((error) => {
        console.error(error);
      });

    res.send("2");
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
