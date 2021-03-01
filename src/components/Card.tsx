import React from "react";
import PropTypes from "prop-types";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from "@ionic/react";

export function Card() {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>John Smith</IonCardTitle>
        <img src={"https://i.imgur.com/lsUCYuQ.png"} alt="abc" />
        <IonCardSubtitle>John Smith</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        Keep close to Nature's heart... and break clear away, once in awhile,
        and climb a mountain or spend a week in the woods. Wash your spirit
        clean.
      </IonCardContent>
    </IonCard>
  );
}

Card.propTypes = {};
