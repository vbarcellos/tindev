import { useContext, useRef, useState } from "react";
import {
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
  IonTextarea,
} from "@ionic/react";

import { AppContext, updateUser, getUser } from "../State";

import urls from "../urls";

import "./Form.css";
import { sleep } from "../util";

const Signup = ({ track, history }) => {
  const { state, dispatch } = useContext(AppContext);

  const usuario = getUser(state);

  const [email, setEmail] = useState(usuario?.email);
  const [name, setName] = useState(usuario?.name);
  const [username, setUsername] = useState(usuario?.username);
  const [password, setPassword] = useState(usuario?.password);
  const [bio, setBio] = useState(usuario?.bio);
  const [img, setImg] = useState(usuario?.img);
  const [position, setPosition] = useState(usuario?.position);

  const [formErrors, setFormErrors] = useState(null);
  const [showLoading, setShowLoading] = useState(false);

  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setShowLoading(true);

      await sleep(1000);

      dispatch(
        updateUser({
          _id: usuario?._id,
          name,
          username,
          password,
          email,
          bio,
          img,
          position,
        })
      );

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
          <IonTitle>Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="form">
        <IonLoading
          isOpen={showLoading}
          message="Saving..."
          onDidDismiss={() => setShowLoading(false)}
        />
        <form onSubmit={handleSubmit} method="post" ref={formRef} action="">
          <IonList>
            <IonItem>
              <IonLabel position={"fixed"}>Name</IonLabel>
              <IonInput
                name="name"
                type="text"
                value={usuario?.name}
                onInput={(e) => setName(e.currentTarget.value)}
              />
            </IonItem>
            <IonItem>
              <IonLabel position={"fixed"}>Username</IonLabel>
              <IonInput
                name="username"
                type="text"
                value={usuario?.username}
                onInput={(e) => setUsername(e.currentTarget.value)}
              />
            </IonItem>
            <IonItem>
              <IonLabel position={"fixed"}>Email</IonLabel>
              <IonInput
                name="email"
                type="email"
                value={usuario?.email}
                onInput={(e) => setEmail(e.currentTarget.value)}
              />
            </IonItem>
            <IonItem>
              <IonLabel position={"fixed"}>Password</IonLabel>
              <IonInput
                name="password"
                type="password"
                value={usuario?.password}
                onInput={(e) => setPassword(e.currentTarget.value)}
              />
            </IonItem>
            <IonItem>
              <IonLabel position={"fixed"}>Position</IonLabel>
              <IonInput
                name="position"
                type="text"
                value={usuario?.position}
                onInput={(e) => setPosition(e.currentTarget.value)}
              />
            </IonItem>
            <IonItem>
              <IonLabel position={"fixed"}>Profile Pic</IonLabel>
              <IonInput
                name="img"
                type="text"
                value={usuario?.img}
                onInput={(e) => setImg(e.currentTarget.value)}
              />
            </IonItem>
            <IonItem>
              <IonLabel position={"fixed"}>Bio</IonLabel>
              <IonTextarea
                rows={5}
                name="bio"
                type="text"
                value={usuario?.bio}
                onInput={(e) => setBio(e.currentTarget.value)}
              />
            </IonItem>

            <IonButton expand="block" type="submit">
              Save
            </IonButton>
          </IonList>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Signup;
