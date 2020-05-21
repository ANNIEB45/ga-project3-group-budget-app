import React from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Home from './components/Home'

import './App.css'

export default class App extends React.Component {
  
  render() {
    return (

      <Router>
        <nav className="nav-bar">
          <Link to='/'><h1>Weekender Budget App</h1></Link>
          <Link>Trips</Link>
          <Link>Expenses</Link>
        </nav>

        <Switch>
          <Route exact path='/' component={ Home }>

          </Route>
        </Switch>
      </Router>

    )
  }
}
