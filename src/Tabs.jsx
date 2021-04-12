import React, { useContext } from "react";

import "./theme/variables.css";

import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import { chatbubble, code, notifications, person } from "ionicons/icons";

import { AppContextProvider, AppContext } from "./State";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import Chats from "./pages/Chats";

const Tabs = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/app/home" component={Home} exact={true} />
          <Route path="/app/login" component={Login} exact={true} />
          <Route path="/app/signup" component={Signup} exact={true} />
          <Route
            path="/app/reset-password"
            component={ResetPassword}
            exact={true}
          />
          <Route
            path="/app/"
            render={() => <Redirect to="/app/login" />}
            exact={true}
          />
          <Route path="/app/chats" component={Chats} exact={true} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="browse" href="/app/home">
            <IonIcon icon={code} />
          </IonTabButton>
          <IonTabButton tab="chat" href="/app/chats">
            <IonIcon icon={chatbubble} />
          </IonTabButton>
          <IonTabButton tab="notifications" href="/app/notifications">
            <IonIcon icon={notifications} />
          </IonTabButton>
          <IonTabButton tab="account" href="/app/account">
            <IonIcon icon={person} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </>
  );
};

export default Tabs;
