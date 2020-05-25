import React from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

//Components
import Home from './components/Home-Component/Home'
import BlogPage from './components/Blog-Component/BlogMainPage'

import './App.css'

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Router>
          <nav className="nav-bar">
            <Link to='/event'><h1>Weekender Budget App</h1></Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/' >Podcast</Link>
          </nav>

          <Switch>
            <Route exact path='/event' component={ Home } />
            <Route exact path='/blog' component={ BlogPage } />
            <Route exact path='/blog/article' />
            <Route exact path='/blog/resources' />
          </Switch>

        </Router>

        <footer className='footer'>
          <div>footer Info here</div>
        </footer>

      </div>

    )
  }
}
