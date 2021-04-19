import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import './Page.css';


const Page: React.FC = () => {
    const openScanner = async () => {
        const data = await BarcodeScanner.scan();
        console.log(`Barcode data: ${data.text}`);
      };
  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
          
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={openScanner}>Scan barcode</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Page;
