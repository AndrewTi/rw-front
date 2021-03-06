import React, { useState, useEffect, Suspense } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useHistory } from 'react-router-dom';

import './App.css'

import Header from './components/header/header';
import Menu from './components/menu/menu';
import Popup from './components/popup/popup';
import SelectionWindow from './components/selectionWindow/selectionWindow';


import HomePage from './pages/homePage/homePage';
import CollectionsPage from './pages/collections/collectionsPage.js';
import Progress from './components/progress/progress';
import PracticePage from './pages/practice/practicePage';
import SupportPage from './pages/supportPage/supportPage';
import WordsPage from './pages/words/wordsPage';
import ClassesPage from './pages/classes/classesPage';
import ClassPage from './pages/class/classPage';
import ChooseRole from './pages/chooseRole/chooseRole';

import SignUp from './pages/signUp/signUp';
import LogIn from './pages/logIn/logIn';

import { getUser, getCollections, getTags } from './service/requests';

//styles 
import './index.scss';

import { currentUser } from './actions/currentUser';
import { setCollections } from './actions/collections';
import { setTags } from './actions/tags';

const mapStateToProps = state => ({
  ...state.currentUser
});

const mapDispatchToProps = dispatch => ({
  currentUser: (payload) => {
     return dispatch(currentUser(payload));
  },
  setCollections: (payload) => {
    return dispatch(setCollections(payload));
  },
  setTags: (payload) => {
    return dispatch(setTags(payload));
  }
})

function App(props) {
  
  const {
    currentUser,
    user,
    setCollections,
    setTags
  } = props;



  const [authChecked, setAuthChecked] = React.useState(false);
   const history = useHistory();

   
    useEffect(async() => {


      const token = localStorage.getItem("accessToken");

      const loadCollectionsAndTags = async () => {
        try {
          const res = await getCollections();
          setCollections({ collections: res.data.collections })
          const resTags = await getTags();
          setTags({tags: resTags.data.tags});
        }
  
        catch (error) {
          console.log(error)
        }
      }

      

      if (token != null) {
        const resp = await getUser().catch(console.log);
  
        if(!resp) {
          localStorage.removeItem("accessToken");
          history.push("/login");
          return setAuthChecked(false);
        } 
        
          currentUser({ user: resp.data.user });
          setAuthChecked(true);
          loadCollectionsAndTags();
  

      }else {
        history.push("/signUp");
        setAuthChecked(false);
      }
    }, [])


  return (
    <>


      {user &&
      <Suspense>
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
            </Switch>

            <SelectionWindow />
            <Popup />
          </div>
        </div>
        </Suspense>

      }
        <Suspense>

        <Switch>
          <Route path="/signUp" component={SignUp} />
          <Route path="/logIn" component={LogIn} />
          <Route path="/chooseRole" component={ChooseRole} />
        </Switch>
        </Suspense>


    </>
  );
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
