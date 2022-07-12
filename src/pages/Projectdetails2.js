import React from "react";
import Layout from "../components/layout-projectdetails";
import "../styles/ProjectDetails.scss"
import ground from "../images/Realizacja_Poreba/papawerya-ground.gif"
import floor from "../images/Realizacja_Poreba/papawerya-floor.gif"
import ImageGallery from "react-image-gallery";
import CollapsibleItem from "../components/Collapsible/collapsible";


const Details = (props) => {
    const images = [
        {
            //https://postimg.cc/MvKVmVzN
            original: 'https://i.postimg.cc/3JsCY353/details1.jpg',
            thumbnail: 'https://i.postimg.cc/8kv2TPxC/details1.jpg',
        },
        {
            //https://postimg.cc/MvKVmVzN
            original: 'https://i.postimg.cc/4NJBjfgq/details1.jpg',
            thumbnail: 'https://i.postimg.cc/02YdkL8m/details2.jpg',
        },
        {
            //https://postimg.cc/MvKVmVzN
            original: 'https://i.postimg.cc/SRpLtjgn/DJI-0468.jpg',
            thumbnail: "https://i.postimg.cc/4yPqNvck/DJI-0468.jpg",
        },
        {
            original: 'https://i.postimg.cc/SR7L0qPD/DJI-0470.jpg',
            thumbnail: 'https://i.postimg.cc/Gh36gN0c/DJI-0470.jpg',
        },
        {
            original: 'https://i.postimg.cc/66df4LQn/DJI-0471.jpg',
            thumbnail: 'https://i.postimg.cc/9XYvp2n8/DJI-0471.jpg',
        },
        {
            original: 'https://i.postimg.cc/2SCy4tn4/projekt1.gif',
            thumbnail: 'https://i.postimg.cc/JskCLmH6/projekt1.gif',
        },
        {
            original: 'https://i.postimg.cc/Y012FN9n/projekt2.gif',
            thumbnail: 'https://i.postimg.cc/R3x5C8cM/projekt2.gif',
        },
    ];

    const generalinfo = {
        area: '5m',
        tel: '3235434535'
    };

    const m = {
        parter: 'Kuchnia: 10 m2',
        poddasze: 'Garaż 7m2',
    };



    const t = {
        brama: 'Brama: Hormann',
    };
    return (
        <Layout>
            <div className="container"><h1>MOKRZYSKA #1</h1></div>
            <div className="project-details-container">
                <ImageGallery items={images} />
                <div className="project-details-heading"><h2>Dom w Mokrzyskach</h2></div>
                <div className="collapseheaderitem">
                    <div className="colitems">
                        <CollapsibleItem title="Informacje Ogólne" metraz='' technologia='' cost="" area={generalinfo.area} tel={generalinfo.tel} />
                        <CollapsibleItem title="Metraż" metraz={<>{m.parter}<br/>{m.poddasze}</>} technologia=''/>
                        <CollapsibleItem title="Technologia" metraz="" technologia={t}/>
                        <CollapsibleItem cost="Do uzgodnienia" title="Cena" metraz="" technologia=''/>

                    </div>

                    <div className="project-details-description section vertical-line">
                        Projekt nowoczesnego domu w stylu stodoły, który wraz z efektownym wyglądem bryły oferuje wygodne,
                        funkcjonalne wnętrze. Z domem bryłowo łączy się jednostanowiskowy garaż, który zaprojektowany został
                        z boku budynku. Modne materiały wykończeniowe, połączenie jasnego tynku z drewnianą okładziną oraz
                        grafitowe akcenty tworzą efektowną wizualnie kompozycję. Bezokapowy dach został wykończony
                        antracytową blachą z łączeniem na rąbek. Wspaniale prezentuje się elewacja ogrodowa z panoramicznym
                        przeszkleniem, które otwiera imponujący widok na ogród. Wnętrze domu to starannie przemyślany
                        program funkcjonalny z optymalnym układem pomieszczeń. Salon z nastrojowym kominkiem to miejsce
                        rodzinnych spotkań i relaksu. Płynnie łączy się z jadalnią, w której można rozłożyć duży stół.
                        Ozdobą wnętrza jest nowoczesne, przesuwne przeszklenie, zapewniające wygodne wyjście na osłonięty
                        szerokim podcieniem taras. Kuchnia w „Domu w papawerach 2” to funkcjonalnie zorganizowana, jasna
                        przestrzeń z obszernym blatem do pracy, barkiem śniadaniowym i odpowiednią ilością miejsc do
                        przechowywania, które dodatkowo uzupełnia usytuowana pod schodami spiżarnia. W tej części domu
                        przewidziano przejście do garażu, dzięki czemu szybko i wygodnie rozpakujemy zakupy spożywcze.
                        Program użytkowy parteru obejmuje również wygodną sypialnię gościnną i zaprojektowaną na jej osi
                        jasną łazienkę z prysznicem. Kotłownia gazowa została połączona z funkcją pralni i dostępna jest z
                        wiatrołapu. Na poddaszu mieści się komfortowy apartament rodziców z łazienką i garderobą,
                        panoramicznym widokiem na ogród oraz wygodną strefą telewizyjną. W praktyczny sposób oddzielono
                        strefę rodziców od dzieci, projektując dwa pokoje dla najmłodszych domowników po przeciwnej stronie
                        schodów. W łazience można zastosować program z wanną oraz prysznicem. „Dom w papawerach 2” to
                        interesująca propozycja z kolekcji: projekty domów nowoczesnych, projekty domów w stylu nowoczesnej
                        stodoły, projekty domów z poddaszem użytkowym. W ofercie dostępne są również inne wersje projektu.
                    </div>
                </div>
            </div>


        </Layout>
    )
}
export default Details