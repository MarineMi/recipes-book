const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../../db/models");

router.post("/registration", async (req, res) => {
  try {
    const { email, name, password, cpassword } = req.body;
    let user = await User.findOne({ where: { email } });
    if (!email || !name || !password || !cpassword) {
      res.json({ message: "Заполни все поля" });
      return;
    }
    if (user) {
      res.json({ message: "Такой емайл уже занят" });
      return;
    }
    if (password !== cpassword) {
      res.json({ message: "пароль не совпадает" });
      return;
    }
    const hash = await bcrypt.hash(password, 2);
    user = await User.create({ name, email, password: hash });
    req.session.userId = user.id;
    res.json({ message: "ok" });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post("/qwer", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!email || !password) {
      res.json({ message: "заполните все поля" });
    } else {
      const compare = await bcrypt.compare(password, user.password);
      if (!user || !compare) {
        res.json({
          message: "Такого пользователя не существует или пароль не вверный",
        });
      } else {
        req.session.userId = user.id;
        res.json({ message: "ok" });
      }
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: "Ошибка при удалении сессии" });
    }
    res.clearCookie("user_sid").redirect("/");
  });
});
module.exports = router;
