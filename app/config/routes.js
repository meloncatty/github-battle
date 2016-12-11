// const React = require('react')
// const ReactRouter = require('react-router')
// const Router = ReactRouter.Router
// const Route = ReactRouter.Route
// const IndexRoute = ReactRouter.IndexRoute
// const Main = require('../components/Main')
// const Home = require('../components/Home')
//
// const routes = (
//   <Router>
//     <Route path='/' component={Main}>
//       <IndexRoute component={Home} />
//     </Route>
//   </Router>
// )
//
// module.exports = routes


const React = require('react')
const ReactRouter = require('react-router')
const Router = ReactRouter.Router
const Route = ReactRouter.Router
const IndexRoute = ReactRouter.IndexRoute
const hashHistory = ReactRouter.hashHistory
const Main = require('../components/Main')
const Home = require('../components/Home')

const routes = (
  <Router>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
    </Route>
 </Router>
)

module.exports = routes
