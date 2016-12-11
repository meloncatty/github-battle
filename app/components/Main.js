const React = require('react')
const Main = React.createClass({
  render: function() {
    return(
      <div>
      Hello from Main!
      {this.props.children}
      </div>

    )
  }
});

module.export = Main
