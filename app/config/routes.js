const React = require('react')
const ReactRouter = require('react-router')
const Router = ReactRouter.Router
const Route = ReactRouter.Router
const IndexRoute = ReactRouter.IndexRoute
const hashHistory = ReactRouter.hashHistory
const Main = require('../components/Main')
const Home = require('../components/Home')

const routes = (
    <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
    </Route>
 </Router>
)

module.exports = routes
