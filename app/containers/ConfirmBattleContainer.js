const React = require('react')
const ConfirmBattle = require('../components/ConfirmBattle')
const githubHelpers = require('../utils/githubHelpers')

const confirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      playersInfo: []
    }
  },
  componentDidMount: function () {
    const query = this.props.location.query
    //fetch info from github then update the state
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then(function (players){
        this.setState({
          isLoading: false,
          playersInfo: [players[0], players[1]]
        })
      }.bind(this))
  },
  handleInitiateBattle: function() {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  },
  render: function() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}
        onInitiateBattle={this.handleInitiateBattle}      />
    )
  }
})

module.exports = confirmBattleContainer
