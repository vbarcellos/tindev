import React, { useState, useCallback, useContext } from "react";
import { IonPage, IonContent, IonButton } from "@ionic/react";

import { AppContext } from "../State";

import "./Home.css";

const Home = ({ track, history }) => {
  //   const { state, dispatch } = useContext(AppContext);

  const goTo = (path) => {
    history.push(path, { direction: "forward" });
  };

  const homeContent = (
    <>
      <div className="title-div">
        <h1 className="tindev-title">Tindev</h1>
      </div>
      <div className="content-div">
        <div>
          <span className="subTitle">
            The perfect app to find your next job or your new employee
          </span>
        </div>
        <div className="buttons-div">
          <IonButton
          
            type="button"
            onClick={(e) => {
              e.preventDefault();
              goTo("/app/login");
            }}
          >
            Log In
          </IonButton>
          <IonButton
            type="button"
            onClick={(e) => {
              e.preventDefault();
              goTo("/app/signup");
            }}
          >
            Sign up
          </IonButton>
        </div>
      </div>
    </>
  );

  return (
    <IonPage>
      <IonContent>
        <div className="container">{homeContent}</div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
