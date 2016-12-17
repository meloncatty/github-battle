const React = require('react')
const ConfirmBattle = require('../components/ConfirmBattle')

const confirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      playerInfo: []
    }
  },
  componentDidMount: function () {
    const query = this.props.location.query
    //fetch info from github then update the state
  },
  render: function() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}
      />
    )
  }
})

module.exports = confirmBattleContainer
