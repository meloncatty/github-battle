const React = require('react')
const Main = React.createClass({
  render: function() {
    return(
      <div>
      <div className='main-container'>
      {this.props.children}
      </div>
    )
  }
})

module.exports = Main
