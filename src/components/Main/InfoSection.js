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
            <h1>JESTEŚMY EKSPERTAMI NA RYNKU NIERUCHOMOŚCI</h1>
          Od wielu lat pomagamy Polakom spełnić marzenia o zarabianiuna
          nieruchomościach. Nasz zespół tworzą specjaliści z wieloletnim
          doświadczeniem w branży hotelarskiej i finansowej. Zdobytą wiedzę
          wykorzystujemy, by efektywnie pomagać inwestorom w znalezieniu
          idealnego lokalu pod wynajem. Dysponujemy bazą apartamentów
          inwestycyjnych w rekreacyjnych kurortach nad morzem, w górach, nad
          jeziorem oraz w mieście. Wybieramy inwestycje na najwyższym poziomie,
          z wszelkimi udogodnieniami i wykończeniem na wysokim standardzie.
          Oferowane hotele i lokale inwestycyjne zlokalizowane są w
          najciekawszych obszarach rekreacyjnych w takich miastach jak:
          Kołobrzeg, Łeba, Krynica Zdrój, Karpacz, Zakopane czy Bukowina. Jeśli
          interesuje Cię inwestowanie w pokoje hotelowe – sprawdź co możemy Ci
          zaoferować.
        </div>
      </div>
      <div className="wrapper">
        <div className="wrapper-home-first seconditem spacing">
            <h1>MODEL BIZNESOWY</h1>
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

      </div>
    </>
  );
};

export default InfoSection;
