import React from "react";
import Layout from "../components/layout-projectdetails";
import "../styles/ProjectDetails.scss"
import ground from "../images/Papaweryb/papawerya-ground.gif"
import floor from "../images/Papaweryb/papawerya-floor.gif"


const Details = (props) => {
    return (
        <Layout>
            <div className="container"><h1>DANE PROJEKTU</h1></div>
            <div className="project-details-container">
                <div className="project-details-heading"><h2>Dom Poręba</h2></div>
                <div className="project-details-items">
                    <div><img className="img-size" src={ground}/></div>
                    <div><img className="img-size" src={floor}/></div>
                </div>
                <div className="project-details-description section vertical-line">
                    Projekt nowoczesnego domu w stylu stodoły, który wraz z efektownym wyglądem bryły oferuje wygodne, funkcjonalne wnętrze. Z domem bryłowo łączy się jednostanowiskowy garaż, który zaprojektowany został z boku budynku. Modne materiały wykończeniowe, połączenie jasnego tynku z drewnianą okładziną oraz grafitowe akcenty tworzą efektowną wizualnie kompozycję. Bezokapowy dach został wykończony antracytową blachą z łączeniem na rąbek. Wspaniale prezentuje się elewacja ogrodowa z panoramicznym przeszkleniem, które otwiera imponujący widok na ogród. Wnętrze domu to starannie przemyślany program funkcjonalny z optymalnym układem pomieszczeń. Salon z nastrojowym kominkiem to miejsce rodzinnych spotkań i relaksu. Płynnie łączy się z jadalnią, w której można rozłożyć duży stół. Ozdobą wnętrza jest nowoczesne, przesuwne przeszklenie, zapewniające wygodne wyjście na osłonięty szerokim podcieniem taras. Kuchnia w „Domu w papawerach 2” to funkcjonalnie zorganizowana, jasna przestrzeń z obszernym blatem do pracy, barkiem śniadaniowym i odpowiednią ilością miejsc do przechowywania, które dodatkowo uzupełnia usytuowana pod schodami spiżarnia. W tej części domu przewidziano przejście do garażu, dzięki czemu szybko i wygodnie rozpakujemy zakupy spożywcze. Program użytkowy parteru obejmuje również wygodną sypialnię gościnną i zaprojektowaną na jej osi jasną łazienkę z prysznicem. Kotłownia gazowa została połączona z funkcją pralni i dostępna jest z wiatrołapu. Na poddaszu mieści się komfortowy apartament rodziców z łazienką i garderobą, panoramicznym widokiem na ogród oraz wygodną strefą telewizyjną. W praktyczny sposób oddzielono strefę rodziców od dzieci, projektując dwa pokoje dla najmłodszych domowników po przeciwnej stronie schodów. W łazience można zastosować program z wanną oraz prysznicem. „Dom w papawerach 2” to interesująca propozycja z kolekcji: projekty domów nowoczesnych, projekty domów w stylu nowoczesnej stodoły, projekty domów z poddaszem użytkowym. W ofercie dostępne są również inne wersje projektu.
                </div>
            </div>


        </Layout>
    )
}
export default Details