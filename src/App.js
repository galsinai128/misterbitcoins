import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HomePage from './components/HomePage/HomePage'
import ContactPage from './components/ContactPage/ContactPage'
import ContactDetailsPage from './components/ContactDetailsPage/ContactDetailsPage'
import StatisticPage from './components/StatisticPage/StatisticPage'
import NavCmp from './components/NavCmp/NavCmp'
import ContactEditPage from './components/ContactEditPage/ContactEditPage'
import SignupPage from './components/SignupPage/SignupPage'
import UserService from './services/UserService'

// import { BrowserRouter, Route, Link } from 'react-router-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins, faHome, faUsers, faChartLine, faUser, faEdit, faArrowLeft, faExchangeAlt, faTrash, faSave } from '@fortawesome/free-solid-svg-icons'


import { observable, computed } from 'mobx';
import { observer, inject } from 'mobx-react';


library.add(faCoins)
library.add(faHome)
library.add(faUsers)
library.add(faChartLine)
library.add(faUser)
library.add(faEdit)
library.add(faArrowLeft)
library.add(faExchangeAlt)
library.add(faTrash)
library.add(faSave)

@inject('store')  
@observer
class App extends Component {
  
  render() {
    return (
        <Router>  
        <div className="App">
          {this.props.store.userStore.user && <NavCmp></NavCmp>}
          <Switch className="app-container">
            <PrivateRoute exact path="/" component={HomePage} />
            <PrivateRoute path="/contact/edit/:_id?" component={ContactEditPage} />
            <PrivateRoute path="/contact/:_id" component={ContactDetailsPage} />
            <PrivateRoute path="/contact" component={ContactPage} />
            <PrivateRoute path="/statistic" component={StatisticPage} />
            <Route path="/signup" component={SignupPage} />
          </Switch>
        </div>
        </Router>
      );
    }  
  }


export default App;
