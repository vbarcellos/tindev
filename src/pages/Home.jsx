import React, { useState, useCallback, useContext } from "react";
import {
  IonPage,
  IonContent,
  IonButton,
  IonSlides,
  IonSlide,
} from "@ionic/react";

import { AppContext, getUsers } from "../State";

import "./Home.css";
import tindevIcon from "../images/tindev_icon.png"

import { Slides } from "./components/Slides";

const Home = ({ track, history }) => {
  const { state, dispatch } = useContext(AppContext);

  const goTo = useCallback(
    (path) => {
      history.push(path, { direction: "forward" });
    },
    [history]
  );

  const getHomeContent = useCallback(() => {
    if (!state?.auth?.user) {
      return (
        <>
          <div className="icon-div">
            <img src={tindevIcon} alt=""/>
          </div>
          <div className="content-div">
            <div>
              <span className="subTitle">
                Embrace the future of hiring
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
    }

    return <Slides history={history} />;
  }, [goTo, history, state?.auth?.user]);

  return (
    <IonPage>
      <IonContent>
        <div className="container">{getHomeContent()}</div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
