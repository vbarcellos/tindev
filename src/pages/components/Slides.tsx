import React, { useCallback, useContext } from "react";
import PropTypes from "prop-types";

import {
  IonContent,
  IonSlides,
  IonSlide,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonToolbar,
  IonButtons,
  IonIcon,
  IonTitle,
  IonRow,
  IonCol,
} from "@ionic/react";

import { AppContext, getUsers } from "../../State";

import "./Slides.css";
import { chatbubble, chatbubbleOutline, personCircle } from "ionicons/icons";

const slideOpts = {
  initialSlide: 1,
  speed: 400,
};

export function Slides(props: any) {
  const { state, dispatch } = useContext(AppContext);

  //   console.log("history :>> ", history);
  console.log("props.history :>> ", props.history);

  const usuarios = getUsers(state);

  console.log("usuarios :>> ", usuarios);
  const goTo = useCallback(
    (path) => {
      props.history.push(path, { direction: "forward" });
    },
    [props.history]
  );

  const getSlide = useCallback((usuario) => {
    return (
      <IonSlide key={usuario?.name}>
        <IonRow>
          <IonCol>
            <IonCard>
              <img src={usuario?.img} alt="" />
              <IonCardHeader>
                <IonCardSubtitle>{usuario?.position}</IonCardSubtitle>
                <IonCardTitle>{usuario?.name}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>{usuario?.bio}</IonCardContent>
            </IonCard>

            <IonButton
              onClick={(e) => {
                e.preventDefault();
                goTo("/app/chats");
              }}
            >
              <IonIcon slot="icon-only" icon={chatbubble} />
              Conversar
            </IonButton>
          </IonCol>
        </IonRow>
      </IonSlide>
    );
  }, []);

  return (
    <IonContent>
      <IonSlides pager={true} options={slideOpts}>
        {usuarios.map((usuario: any) => getSlide(usuario))}
      </IonSlides>
    </IonContent>
  );
}

Slides.propTypes = {};
