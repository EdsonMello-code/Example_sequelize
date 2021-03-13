const User = require("../models/User")

module.exports = {
  async store(req, res) {
    const user = await User.create({
      name: 'edson'
    });

    return res.json(user);
  },

  async index(req, res) {
    const users = await User.findAll({ include: { association: 'posts' } })
    return res.json(users);
  }
}