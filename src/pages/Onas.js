import React from "react";
import "../styles/Onas.scss";
import Layout from "../components/layout";


const Onas = () => {
    return (
        <Layout>
            <div className="onas-container"><h1>O nas</h1></div>
            <div className="section-wrapper">
                <div className="section vertical-line">
                    <h2>Nasza Misja</h2>
                    Nasza działalność jako dewelopera budowlanego w zakresie inwestycji mieszkaniowych obejmuje: zakupy
                    gruntów, projektowanie budynków w oparciu o własne biuro projektowe, realizację inwestycji
                    budowlanych, sprzedaż lub wynajem budynków, administrację i zarządzanie nieruchomościami.
                    To, co cechuje nasze działania, to terminowe realizowanie inwestycji, stała i doświadczona kadra
                    pracowników, zarówno biurowo-administracyjnych, jak i budowlanych, współpraca z najlepszymi biurami
                    architektonicznymi oraz własny dział sprzedaży i obsługi klienta.
                    W naszej pracy dewelopera i w trakcie realizacji każdej inwestycji kierujemy się też ścisłą
                    dokładnie przestrzeganą polityką jakości. Aby realizować tę strategię, prowadzimy analizy
                    zadowolenia klienta, weryfikujemy wykonawców usług budowlanych, organizujemy szkolenia pracowników i
                    - co istotne - jesteśmy elastyczni i na życzenie klienta realizujemy zmiany lokatorskie w wybranych
                    mieszkaniach.
                </div>
            </div>
        </Layout>
    )
}

export default Onas;