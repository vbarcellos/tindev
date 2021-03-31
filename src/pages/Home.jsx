import React, { useState, useCallback, useContext } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";

import { AppContext } from "../State";

import "./Home.css";

const Home = () => {
//   const { state, dispatch } = useContext(AppContext);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="container">
          <strong>Home</strong>
          <p>
            <a href="/app/login">Login</a>
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
