import React from "react";
import "./InfoSection.scss";
import Homephoto1 from "../../images/HomeImages/Home1.jpg";
import Homephoto2 from "../../images/HomeImages/Home2.jpg";

const InfoSection = () => {
  return (
    <>
      <div className="wrapper">
        <div className="wrapper-home-first">
          <img src={Homephoto1} alt="Home1" />
        </div>
        <div className="wrapper-home-second spacing">
            <h2>JESTEŚMY EKSPERTAMI NA RYNKU NIERUCHOMOŚCI</h2>
            Branża deweloperska jest jedną z najbardziej rozwijających się części gospodarki. 
Inwestycje mają wiele ważnych społecznie ról. Od tworzenia miejsc zamieszkania przez miejsca wypoczynkowe po popularny i uważany za bezpieczny środek tezauryzacji majątku. Uważamy, że kazda inwestycja powinna mieć schludny i godny wizerunek. Naszym celem jest współtworzenie projektów deweloperskich mających szeroki impakt w swoim otoczeniu. 
        </div>
      </div>
      <div className="wrapper">
        <div className="wrapper-home-first seconditem spacing">
            <h2>MODEL BIZNESOWY</h2>
        W condohotelach zysk z najmu jest dzielony pomiędzy inwestora, a
            operatora, według ściśle określonego modelu rozliczeń. Inwestorzy
            kupujący pokoje na wynajem mają zapewniony stały zysk na poziomie
            7-8% (w zależności od obiektu), przez cały czas trwania wynajmu.
            Oznacza to, że obłożenie obiektu nie wpływa na przychody właściciela
            apartamentu. Zasady te mają zastosowanie pod warunkiem, że inwestor
            nie korzysta z pobytu właścicielskiego. W sytuacji gdy chce
            wykorzystywać apartament do własnych celów, poziom zysku zostaje
            pomniejszony o 1%.
        </div>
        <div className="wrapper-home-second firstitem">
        <img src={Homephoto2} alt="Home2" />
          </div>
<div></div>
      </div>
    </>
  );
};

export default InfoSection;
