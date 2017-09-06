var config = require('./config')
var models={};
// Database setup
var Sequelize = require('sequelize');
var sequelize = new Sequelize(config.database.mysql.name,config.database.mysql.username,config.database.mysql.password,{host:config.database.mysql.host,dialect:'mysql',timezone : "+5:30"});
models.sequelize = sequelize;
models.User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: Sequelize.STRING
  },
  password:{
    type:Sequelize.STRING
  },
  type:{
    type:Sequelize.STRING
  }
});
models.Post = sequelize.define('Post', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: Sequelize.STRING
  },
  text:{
    type:Sequelize.STRING
  },
  user_id:{
    type: Sequelize.INTEGER,
    references: {
       model: models.User,
       key: 'id',
     }
  }
});

models.User.hasMany(models.Post,{foreignKey: 'user_id', targetKey: 'id'});
models.Post.belongsTo(models.User,{foreignKey: 'user_id', targetKey: 'id'})

module.exports=models
