import React from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import './App.css'

export default class App extends React.Component{
  render() {
    return (

      <Router>
        <nav className="nav-bar">
          <Link to='/'>Home</Link>
          <Link>Trips</Link>
          <Link>Expenses</Link>
        </nav>
          <Switch>
            <Route>

            </Route>
          </Switch>
        </Router>
      
    )
  }
}
