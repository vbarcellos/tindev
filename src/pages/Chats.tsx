import React, { useCallback, useContext } from "react";
import PropTypes from "prop-types";
import {
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { AppContext, getUser } from "../State";

function Chats(props: any) {
  const { state, dispatch } = useContext(AppContext);

  const usuario = getUser(state);

  console.log("usuario :>> ", usuario);

  const detalharConversa = useCallback((chat: object) => {
    console.log("chat :>> ", chat);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Chats</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Porque a lista está alinhada ao fim? */}
      <IonList>
        {usuario?.openChats.map((chat: any) => (
          <IonItem
            color="primary"
            key={chat}
            onClick={() => detalharConversa(chat)}
            button
          >
            <IonThumbnail slot="start">
              <img src={"https://i.imgur.com/EVl2or1.png"} alt="avatar" />
            </IonThumbnail>
            <IonLabel>
              <h2>{chat?.username}</h2>
            </IonLabel>
          </IonItem>
        ))}
      </IonList>
    </IonPage>
  );
}

Chats.propTypes = {};

export default Chats;
