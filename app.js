// var Sequelize = require('sequelize')
//   , sequelize = new Sequelize('test', 'nodeorm', 'abcdefg', {
//       dialect: "mysql", // or 'sqlite', 'postgres', 'mariadb'
//       port:    3306, // or 5432 (for postgres)
//     })
 
// sequelize
//   .authenticate()
//   .complete(function(err) {
//     if (!!err) {
//       console.log('Unable to connect to the database.')
//     } else {
//       console.log('Connection has been established successfully using Sequelize.')
//     }
//   })

var Sequelize = require('sequelize')
, sequelize = new Sequelize('test', 'nodeorm', 'abcdefg', {
  dialect: "mysql",
  port: 3306
})
, User      = sequelize.define('User', {
                username: Sequelize.STRING,
                password: Sequelize.STRING
              })
 
sequelize.sync({ force: true }).complete(function(err) {
  User.create({ username: 'john', password: '1111' }).complete(function(err, user1) {
    User.find({ username: 'john' }).complete(function(err, user2) {
      console.log(user1.values, user2.values)
    })
  })
})
