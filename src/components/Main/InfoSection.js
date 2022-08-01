import React from "react";
import "./InfoSection.scss";
import Homephoto1 from "../../images/HomeImages/Home1.jpg";
import Homephoto2 from "../../images/HomeImages/Home2.jpg";

const InfoSection = () => {
    return (
        <>
            <div className="wrapper">
                <div className="wrapper-home-first">
                    <img src={Homephoto1} alt="Home1"/>
                </div>
                <div className="wrapper-home-second spacing">
                    <h2>JESTEŚMY EKSPERTAMI NA RYNKU NIERUCHOMOŚCI</h2>
                    Branża deweloperska jest jedną z najbardziej rozwijających się części gospodarki.
                    Inwestycje mają wiele ważnych społecznie ról. Od tworzenia miejsc zamieszkania przez miejsca
                    wypoczynkowe po popularny i uważany za bezpieczny środek tezauryzacji majątku. Uważamy, że kazda
                    inwestycja powinna mieć schludny i godny wizerunek. Naszym celem jest współtworzenie projektów
                    deweloperskich mających szeroki impakt w swoim otoczeniu.
                </div>
            </div>
            <div className="wrapper">
                <div className="wrapper-home-first seconditem spacing">
                    <h2>CO NAS WYRÓŻNIA</h2>
                    <p>Nasza działalność jako dewelopera budowlanego w zakresie inwestycji mieszkaniowych obejmuje: zakupy
                    gruntów, projektowanie budynków w oparciu o własne biuro projektowe, realizację inwestycji
                        budowlanych, sprzedaż lub wynajem budynków, administrację i zarządzanie nieruchomościami.</p>
<br />
                    <p>To, co cechuje nasze działania, to terminowe realizowanie inwestycji, stała i doświadczona kadra
                    pracowników, zarówno biurowo-administracyjnych, jak i budowlanych, współpraca z najlepszymi biurami
                    architektonicznymi oraz własny dział sprzedaży i obsługi klienta.</p>
<br />
                    <p>W naszej pracy dewelopera i w trakcie realizacji każdej inwestycji kierujemy się też ścisłą
                    dokładnie przestrzeganą polityką jakości. Aby realizować tę strategię, prowadzimy analizy
                        zadowolenia klienta, weryfikujemy wykonawców usług budowlanych.</p>
                </div>
                <div className="wrapper-home-second firstitem">
                    <img src={Homephoto2} alt="Home2"/>
                </div>
                <div></div>
            </div>
        </>
    );
};

export default InfoSection;
