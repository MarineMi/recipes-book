const router = require('express').Router();
const Rega = require('../../components/Rega');
const Loga = require('../../components/Loga');

router.get('/registration', (req, res) => {
  res.send(res.renderComponent(Rega, { title: 'Регистрация' }));
});
router.get('/qwer', (req, res) => {
  res.send(res.renderComponent(Loga, { title: 'Авторизация' }));
});

module.exports = router;
