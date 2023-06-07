const { User } = require('../db/models');

async function getUser(req, res, next) {
  if (req.session.userId) {
    console.log(req.session);
    const user = await User.findOne({ where: { id: req.session.userId } });
    res.locals.user = { id: user.id, name: user.name };
  }
  next();
}
module.exports = getUser;