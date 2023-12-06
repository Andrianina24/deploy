import React, { useState } from "react";
import {
  IonButtons,
  IonItem,
  IonLabel,
  IonContent,
  IonAccordion,
  IonHeader,
  IonMenu,
  IonAccordionGroup,
  IonButton,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Header.css";
import Table from "./Table";

interface ContainerProps {
  meth: string;
}

// Reusable Button component
interface CustomButtonProps {
  label: string;
  method: string;
  onClick: (method: string) => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  method,
  onClick,
}) => (
  <div className="ion-padding" slot="content">
    <IonButton expand="full" onClick={() => onClick(method)}>
      {label}
    </IonButton>
  </div>
);

// Accordion section component
interface AccordionSectionProps {
  label: string;
  method: string;
  onClick: (method: string) => void;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({
  label,
  method,
  onClick,
}) => (
  <IonAccordion value={method}>
    <IonItem slot="header" color="light">
      <IonLabel>{label}</IonLabel>
    </IonItem>
    <CustomButton label="General" method={method} onClick={onClick} />
    <CustomButton label="Domicile" method={`${method}Dom`} onClick={onClick} />
    <CustomButton label="Exterieur" method={`${method}Ext`} onClick={onClick} />
  </IonAccordion>
);

// Header component
const Header: React.FC<ContainerProps> = () => {
  const [selectedMethod, setSelectedMethod] = useState<string>("general");

  const handleButtonClick = (method: string) => {
    setSelectedMethod(method);
  };

  return (
    <div className="headreturn">
      <IonMenu side="end" contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Statistiques</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonAccordionGroup className="accord">
            <AccordionSection
              label="General"
              method="general"
              onClick={handleButtonClick}
            />
            <AccordionSection
              label="Attaque"
              method="attaque"
              onClick={handleButtonClick}
            />
            <AccordionSection
              label="Defense"
              method="defense"
              onClick={handleButtonClick}
            />
          </IonAccordionGroup>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              <span className="who">Who</span>
              <span className="scored">Scored</span>
            </IonTitle>
            <IonButtons slot="end">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <Table meth={selectedMethod} />
        </IonContent>
      </IonPage>
    </div>
  );
};

export default Header;
