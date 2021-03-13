const { Model, DataTypes } = require("sequelize");

class Post extends Model {
  static init(sequelize) { 
    super.init({
      content: DataTypes.STRING
    }, {
      sequelize
    });
  }
}

module.exports = Post;