const axios = require('axios')

const id = "YOUR_CLIENT_ID"
const sec = "YOUR_SECRET_ID"
const param = "?client_id=" + id + "&client_secret" + sec

function getUserInfo (username) {
  return axios.get('https://api.github.com/users/' + username + param)
}

function getRepos (username) {
  return axios.get('https://api.github.com/users/' + username + '/repos' + param + '&per_page=100')
}

function getTotalStars (stars) {
  return repos.data.reduce(function (p, c){
    return p + c.stargazers_count
  }, 0)
}

function getPlayersData (player) {
  return getRepos(player.login)
    .then(getTotalStars)
    .then(function (totalStars){
      return {
        followers: player.followers,
        totalStars: totalStars
      }
    })
}

function calculateScores (players) {
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ]
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
  },
  battle: function(players) {
    const playerOneData = getPlayersData(players[0])
    const playerTwoData = getPlayersData(players[1])

    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch(function (err) {console.warn('Error', err)})
  }
}

module.exports = helpers
