import React from "react";
import PropTypes from "prop-types";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from "@ionic/react";

import {} from "./Card";

// import f1 from "../../resources/f1.png";

export function Cards() {
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

Cards.propTypes = {};

/*
<ion-card>
  <img src="./madison.jpg" />
  <ion-card-header>
    <ion-card-subtitle>Destination</ion-card-subtitle>
    <ion-card-title>Madison, WI</ion-card-title>
  </ion-card-header>
  <ion-card-content>
    Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison
    was named the capital of the Wisconsin Territory in 1836.
  </ion-card-content>
</ion-card>;
*/

/*
 <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>CardExamples</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            <IonCardTitle>Card Title</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
      </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem>
            <IonIcon icon={pin} slot="start" />
            <IonLabel>ion-item in a card, icon left, button right</IonLabel>
            <IonButton fill="outline" slot="end">View</IonButton>
          </IonItem>

          <IonCardContent>
            This is content, without any paragraph or header tags,
            within an ion-cardContent element.
      </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem href="#" className="ion-activated">
            <IonIcon icon={wifi} slot="start" />
            <IonLabel>Card Link Item 1 activated</IonLabel>
          </IonItem>

          <IonItem href="#">
            <IonIcon icon={wine} slot="start" />
            <IonLabel>Card Link Item 2</IonLabel>
          </IonItem>

          <IonItem className="ion-activated">
            <IonIcon icon={warning} slot="start" />
            <IonLabel>Card Button Item 1 activated</IonLabel>
          </IonItem>

          <IonItem>
            <IonIcon icon={walk} slot="start" />
            <IonLabel>Card Button Item 2</IonLabel>
          </IonItem>
        </IonCard>
*/
