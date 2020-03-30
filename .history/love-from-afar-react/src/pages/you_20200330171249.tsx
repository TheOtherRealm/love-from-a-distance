import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './you.css';

const you: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>You</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">You</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent>
					<IonList>
						<IonItemDivider>Default textarea</IonItemDivider>
						<IonItem>
							<IonTextarea value={text} onIonChange={e => setText(e.detail.value!)}></IonTextarea>
						</IonItem>

						<IonItemDivider>Textarea in an item with a placeholder</IonItemDivider>
						<IonItem>
							<IonTextarea placeholder="Enter more information here..." value={text} onIonChange={e => setText(e.detail.value!)}></IonTextarea>
						</IonItem>

						<IonItemDivider>Textarea in an item with a floating label</IonItemDivider>
						<IonItem>
							<IonLabel position="floating">Description</IonLabel>
							<IonTextarea value={text} onIonChange={e => setText(e.detail.value!)}></IonTextarea>
						</IonItem>

						<IonItemDivider>Disabled and readonly textarea in an item with a stacked label</IonItemDivider>
						<IonItem>
							<IonLabel position="stacked">Summary</IonLabel>
							<IonTextarea
								disabled
								readonly
								value={text} onIonChange={e => setText(e.detail.value!)}>
							</IonTextarea>
						</IonItem>

						<IonItemDivider>Textarea that clears the value on edit</IonItemDivider>
						<IonItem>
							<IonLabel>Comment</IonLabel>
							<IonTextarea clearOnEdit={true} value={text} onIonChange={e => setText(e.detail.value!)}></IonTextarea>
						</IonItem>

						<IonItemDivider>Textarea with custom number of rows and cols</IonItemDivider>
						<IonItem>
							<IonLabel>Notes</IonLabel>
							<IonTextarea rows={6} cols={20} placeholder="Enter any notes here..." value={text} onIonChange={e => setText(e.detail.value!)}></IonTextarea>
						</IonItem>
					</IonList>
				</IonContent>
			</IonContent>
		</IonPage>
	);
};

export default you;
