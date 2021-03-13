const Post = require("../models/Post")

module.exports = {
  async store(req, res) {
    const { user_id } = req.params;
    const { content } = req.body;

    try {
      // await Post.sequelize.query('SET FOREIGN_KEY_CHECKS=0') // com isso funciona, mas não dar para fazer relacionamento
      const user = await Post.create({ content, user_id });   
      console.log(user);
      return res.json(user);
    } catch (error) {
      return res.json(error); 
    }
  },

  async index(req, res) {
    const user = await Post.findAll({ include: { association: 'users' } });

    return res.json(user);
  }
}