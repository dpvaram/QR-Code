import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import React, { useState } from 'react';
import { QRCode } from 'react-qrcode-logo';
import { InputField } from '../components/InputField';
import { SelectField } from '../components/SelectField';
import { ImageUploadField } from '../components/ImageUploadField';


const Page: React.FC = () => {
  const [state, setState] = useState({
                size: 250,
                quietZone: 30,
                logoHeight: 26,
                logoWidth: 70,
              });
  const { name } = useParams<{ name: string; }>();
  
  const handleChange = ({ target }: any) => {
		setState(prevState => ({ ...prevState, [target.name]: target.value }))
	}

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
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
					<div style={{ width: '240px', display: 'flex', flexDirection: 'column', padding: '5px' }}>
            <SelectField
							name='value'
              placeholder='Buyer Teminal ID'
							options={['Buyer 1', 'Buyer 2', 'Buyer 3', 'Buyer 4']}
							handleChange={handleChange}
						/>
            <ImageUploadField
							name='logoImage'
							handleChange={handleChange}
						/>
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '4px', justifyContent: 'space-around' }}>
							<InputField
								name='bgColor'
								type='color'
								defaultValue='#ffffff'
								handleChange={handleChange}
							/>
							<InputField
								name='fgColor'
								type='color'
								defaultValue='#000000'
								handleChange={handleChange}
							/>
						</div>
					</div>
					
				</div>
        <div style={{
                    width: 400,
                    height: 400,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '1px solid #d4fafc',
                    borderRadius: '50px',
                    backgroundColor: '#d4fafc'
                  }}>
                    <QRCode {...state} />
                  </div>
      </IonContent>
    </IonPage>
  );
};

export default Page;
