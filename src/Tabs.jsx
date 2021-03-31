import React, { useContext } from 'react';

/* Theme variables */
import './theme/variables.css';

import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import {
  home,
  homeOutline,
  homeSharp,
  informationCircle,
  person,
  search
} from 'ionicons/icons';


import { AppContextProvider, AppContext } from './State';

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ResetPassword from './pages/ResetPassword'

const Tabs = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <>
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/app/home" component={Home} exact={true} />
        <Route path="/app/login" component={Login} exact={true} />
        <Route path="/app/signup" component={Signup} exact={true} />
        <Route path="/app/reset-password" component={ResetPassword} exact={true} />
        <Route path="/app/" render={() => <Redirect to="/app/login" />} exact={true} />
      </IonRouterOutlet>
      
      <IonTabBar slot="bottom">
        <IonTabButton tab="browse" href="/app/home">
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="search" href="/app/search">
          <IonIcon icon={search} />
          <IonLabel>Search</IonLabel>
        </IonTabButton>
        <IonTabButton tab="account" href="/app/account">
          <IonIcon icon={person} />
          <IonLabel>Your Library</IonLabel>
        </IonTabButton>
          <IonTabButton tab="readme" href="/app/readme">
          <IonIcon icon={informationCircle} />
          <IonLabel>README</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </>
  );
}

export default Tabs;
