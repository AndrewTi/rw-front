import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
// import { useLocation } from 'react-router-dom'

import './App.css'

import Header from './components/header/header';
import Menu from './components/menu/menu';
import Popup from './components/popup/popup';


import HomePage from './pages/homePage/homePage';
import CollectionsPage from './pages/collections/collectionsPage.js';
import Progress from './components/progress/progress';
import PracticePage from './pages/practice/practicePage';
import SupportPage from './pages/support/supportPage';
import WordsPage from './pages/words/wordsPage';
import ClassesPage from './pages/classes/classesPage';
import ClassPage from './pages/class/classPage';

import SignUp from './pages/signUp/signUp';
import LogIn from './pages/logIn/logIn';


//styles 
import './index.scss';

const mapStateToProps = state => ({
  ...state.currentUser
});


function App(props) {

  const [isCurrentUser, setIsCurrentUser] = React.useState(false)

  useEffect(() => {
    if (Object.entries(props.user).length != 0) {
      setIsCurrentUser(true)
    }
   }, [props.user]);

  return (
    <Router>

      { true 
      
      ?

        <div className="flex dark">
          <Menu />

          <div className="flex-1 relative contentWrapper">
            <Header />

            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/collections" component={CollectionsPage} />
              <Route path="/practice" component={PracticePage} />
              <Route path="/classes" component={ClassesPage} />
              <Route path="/class" component={ClassPage} />
              <Route path="/support" component={SupportPage} />
              <Route path="/collection1" component={WordsPage} />
              <Route path="/collection2" component={WordsPage} />
              <Route path="/collection3" component={WordsPage} />

              <Redirect to="/" exact />
            </Switch>

            <Popup />

          </div>

          {/* <Progress /> */}

        </div>

        :

        <Switch>
          <Route path="/signUp" component={SignUp} />
          <Route path="/logIn" component={LogIn} />
          <Redirect to="/signUp" />
        </Switch>
      }


    </Router>
  );
}


export default connect(
  mapStateToProps,
  null
)(App);
