import React, { useState, Dispatch } from 'react';
import {
  IonApp,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
  IonRow,
  IonGrid,
  IonCol,
  IonIcon,
  IonText,
  IonToast,
} from '@ionic/react';
import {
  logoFacebook,
  logoInstagram,
  logoLinkedin,
  logoGithub,
  logoWhatsapp,
  logoTwitter,
  logoGooglePlaystore,
  logoSnapchat,
  code,
} from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {
  const [isToastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  return (
    <IonApp>
      {/* App Header */}
      <IonHeader>
        <IonToolbar color='primary'>
          <IonTitle>Akul Srivastava</IonTitle>
        </IonToolbar>
      </IonHeader>
      {/* App Content */}
      <IonContent>
        <IonGrid className='ion-no-padding'>
          {/* Row 0 */}
          <IonRow style={{ marginTop: 40 }}>
            <IonCol class='ion-text-center'>
              <IonText style={{ fontSize: 20, fontWeight: 'bold' }}>
                My Social Accounts
              </IonText>
            </IonCol>
          </IonRow>
          {/* Row 1 */}
          <IonRow style={{ marginTop: 30 }}>
            <IonCol
              className='ion-text-center'
              onClick={() => {
                setToastVisible(true);
                setToastMessage('https://www.facebook.com/akulsr0');
              }}
            >
              <IonIcon
                style={{ color: '#00a8ff' }}
                size='large'
                icon={logoFacebook}
              />
            </IonCol>
            <IonCol
              className='ion-text-center'
              onClick={() => {
                setToastVisible(true);
                setToastMessage('https://www.instagram.com/akulsr0');
              }}
            >
              <IonIcon
                style={{ color: '#e84118' }}
                size='large'
                icon={logoInstagram}
              />
            </IonCol>
            <IonCol
              className='ion-text-center'
              onClick={() => {
                setToastVisible(true);
                setToastMessage('Shhh! Not Available');
              }}
            >
              <IonIcon
                style={{ color: '#44bd32' }}
                size='large'
                icon={logoWhatsapp}
              />
            </IonCol>
          </IonRow>
          {/* Row 2 */}
          <IonRow style={{ marginTop: 40 }}>
            <IonCol
              className='ion-text-center'
              onClick={() => {
                setToastVisible(true);
                setToastMessage('Snapchat: @akulsr0');
              }}
            >
              <IonIcon
                style={{ color: '#fbc531' }}
                size='large'
                icon={logoSnapchat}
              />
            </IonCol>
            <IonCol
              className='ion-text-center'
              onClick={() => {
                setToastVisible(true);
                setToastMessage('https://www.linkedin.com/in/akulsr0/');
              }}
            >
              <IonIcon
                style={{ color: '#273c75' }}
                size='large'
                icon={logoLinkedin}
              />
            </IonCol>
            <IonCol
              className='ion-text-center'
              onClick={() => {
                setToastVisible(true);
                setToastMessage('https://www.twitter.com/akulsr0/');
              }}
            >
              <IonIcon
                style={{ color: '#0097e6' }}
                size='large'
                icon={logoTwitter}
              />
            </IonCol>
          </IonRow>
          {/* Row 3 */}
          <IonRow style={{ marginTop: 40 }}>
            <IonCol
              className='ion-text-center'
              onClick={() => {
                setToastVisible(true);
                setToastMessage('https://www.github.com/akulsr0/');
              }}
            >
              <IonIcon
                style={{ color: '#353b48' }}
                size='large'
                icon={logoGithub}
              />
            </IonCol>
            <IonCol
              className='ion-text-center'
              onClick={() => {
                setToastVisible(true);
                setToastMessage('https://www.akulsrivastava.com/');
              }}
            >
              <IonIcon style={{ color: '#dcdde1' }} size='large' icon={code} />
            </IonCol>
            <IonCol
              className='ion-text-center'
              onClick={() => {
                setToastVisible(true);
                setToastMessage(
                  'https://play.google.com/store/apps/developer?id=Akul+Srivastava'
                );
              }}
            >
              <IonIcon
                style={{ color: '#2f3640' }}
                size='large'
                icon={logoGooglePlaystore}
              />
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonToast
          isOpen={isToastVisible}
          onDidDismiss={() => {
            setToastVisible(false);
            setToastMessage('');
          }}
          message={toastMessage}
          duration={1200}
        />
      </IonContent>
    </IonApp>
  );
};

export default App;
