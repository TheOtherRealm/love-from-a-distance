import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './yourlover.css';

const yourlover: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Your Lover</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>Your Lover</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Your Lover" />
      </IonContent>
    </IonPage>
  );
};

export default yourlover;
