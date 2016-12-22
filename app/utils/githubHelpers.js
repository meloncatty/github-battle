const axios = require('axios')

const id = "YOUR_CLIENT_ID"
const sec = "YOUR_SECRET_ID"
const param = "?client_id=" + id + "&client_secret" + sec


function getUserInfo (username) {
  return axios.get('https://api.github.com/users/' + username + param)
}

const helpers = {
  getPlayersInfo: function(players) {
    //fetch some data from github
    //if we return a promise we can modify the data
    //but if we keep returning we'll just get another promise
    return axios.all(players.map(function (username){
      return getUserInfo(username)
    })).then(function (info) {
      return info.map(function (user) {
        return user.data
      })
    }).catch(function (err) {
      //it's a good idea to add .catch at the end of your promise chains ^-^
      console.warn('Error in getPlayersInfo', err)
    })
  }
}

module.exports = helpers
