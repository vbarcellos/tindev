import React, { useContext, useRef, useState } from "react";
import {
  IonBackButton,
  IonButtons,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonLoading,
} from "@ionic/react";

import { AppContext, localLogin } from "../State";

import { authenticate } from "../firebaseConfig";

import urls from "../urls";

import "./Form.css";

const Login = ({ track, history }) => {
  const { state, dispatch } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState(null);
  const [showLoading, setShowLoading] = useState(false);

  const formRef = useRef(null);

  const goTo = (path) => {
    history.push(path, { direction: "forward" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setShowLoading(true);

      const firebaseUser = await authenticate(email, password);
      const user = state?.users.find(
        (user) => user.email === firebaseUser?.email
      );

      dispatch(localLogin(user));

      history.replace(urls.APP_HOME);

      setShowLoading(false);
    } catch (e) {
      console.error(e);
      setShowLoading(false);
      setFormErrors(e);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonButtons slot="start">
            <IonBackButton defaultHref={`/`} />
          </IonButtons>
          <IonTitle>Log In</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="form-div">
        <IonLoading
          isOpen={showLoading}
          message="Logging in..."
          onDidDismiss={() => setShowLoading(false)}
        />
        <form onSubmit={handleSubmit} method="post" ref={formRef} action="">
          <IonList>
            <IonItem>
              <IonLabel position={"fixed"}>Email</IonLabel>
              <IonInput
                type="email"
                value={email}
                onInput={(e) => setEmail(e.currentTarget.value)}
              />
            </IonItem>
            <IonItem>
              <IonLabel position={"fixed"}>Password</IonLabel>
              <IonInput
                type="password"
                value={password}
                onInput={(e) => setPassword(e.currentTarget.value)}
              />
            </IonItem>
            <IonButton expand="block" type="submit">
              Log in
            </IonButton>
          </IonList>
        </form>
        <div className="below-form">
          <IonButton
            type="button"
            onClick={(e) => {
              e.preventDefault();
              goTo("/app/signup");
            }}
          >
            No account? Sign up!
          </IonButton>
          <a
            href="#/"
            onClick={(e) => {
              e.preventDefault();
              goTo("/app/reset-password");
            }}
          >
            Forgot your password?
          </a>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
