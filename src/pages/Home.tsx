import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import Header from "../components/Header";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Header meth=""/>
        {/* <ExploreContainer/> */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
