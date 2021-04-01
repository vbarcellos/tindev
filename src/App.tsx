import React from "react";

/* Theme variables */
import "./theme/variables.css";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, IonPage } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { AppContextProvider } from "./State";

import urls from "./urls";
import Tabs from "./Tabs";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <AppContextProvider>
      <IonApp>
        <IonReactRouter>
          <IonPage>
            <IonRouterOutlet>
              <Route path={urls.LOGIN} component={Login} exact={true} />
              <Route path={urls.SIGNUP} component={Signup} exact={true} />
              <Route
                path={urls.RESET_PASSWORD}
                component={ResetPassword}
                exact={true}
              />
              <Route
                exact={true}
                path="/"
                render={() => <Redirect to={urls.APP_HOME} />}
              />
            </IonRouterOutlet>
            <Route path="/app" component={Tabs} />
          </IonPage>
        </IonReactRouter>
      </IonApp>
    </AppContextProvider>
  );
};

export default App;
