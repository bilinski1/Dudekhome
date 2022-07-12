import React, {useState} from "react";
import Layout from "../components/layout-projectdetails";
import "../styles/ProjectDetails.scss"
import useCollapse from "react-collapsed";
import {FiArrowUpCircle} from "@react-icons/all-files/fi/FiArrowUpCircle";
import {FiArrowDownCircle} from "@react-icons/all-files/fi/FiArrowDownCircle";
import ImageGallery from 'react-image-gallery';
import CollapsibleItem from "../components/Collapsible/collapsible";


const Details = (props) => {
    const [isExpanded, setExpanded] = useState(false);
    const {getCollapseProps, getToggleProps} = useCollapse({isExpanded});

    function handleOnClick() {
        setExpanded(!isExpanded);
    }

    const images = [
        {
            //https://postimg.cc/MvKVmVzN
            original: 'https://i.postimg.cc/8C7SrMF5/PAPAWERY-02-0-01-foto1-CMYK.jpg',
            thumbnail: "https://i.postimg.cc/DZbnRLFD/PAPAWERY-02-0-01-foto1-CMYK.png",
        },
        {
            original: 'https://i.postimg.cc/RVXgt8xS/DJI-0486-2.jpg',
            thumbnail: 'https://i.postimg.cc/qRRYhTzd/DJI-0486-2.jpg',
        },
        {
            original: 'https://i.postimg.cc/N03tcFdz/DJI-0486-Enhanced.png',
            thumbnail: 'https://i.postimg.cc/d1xfGxyZ/DJI-0486-Enhanced.jpg',
        },
        {
            original: 'https://i.postimg.cc/htYMydGN/DJI-0487-2.jpg',
            thumbnail: 'https://i.postimg.cc/mk15jyYX/DJI-0487-2.jpg',
        },
        {
            original: 'https://i.postimg.cc/P5J2Q4dm/DJI-0496-2.jpg',
            thumbnail: 'https://i.postimg.cc/qgfZ56Qk/DJI-0496-2.jpg',
        },
        {
            original: 'https://i.postimg.cc/jjPM9Smc/projekt-dom-w-papawerach-2-84e2ed358276ae50d1096ff7d1816382-11817.gif',
            thumbnail: 'https://i.postimg.cc/Pqs4mkJw/projekt-dom-w-papawerach-2-84e2ed358276ae50d1096ff7d1816382-11817.png',
        },
        {
            original: 'https://i.postimg.cc/764Kyyyk/projekt-dom-w-papawerach-2-b6bd60631370038d4f9ba2f8a1c70dc5-11815-1.gif',
            thumbnail: 'https://i.postimg.cc/CKG476n6/projekt-dom-w-papawerach-2-b6bd60631370038d4f9ba2f8a1c70dc5-11815-1.png',
        },

    ];

    const generalinfo = {
        area: 'Powierzchnia: 128,04 m2',
        garagearea: 'Garaż: 22,47m2',
        heating: 'Kotłownia: 4,82m2',
        tel: '3235434535'

    };

    const m = {
        parter: 'Parter: 81,64 m2',
        poddasze: 'Poddasze: 53,20 m2',
    };


    const t = {
        brama: 'Brama: Hormann',
    };

    return (
        <Layout>
            <div className="container"><h1>PORĘBA SPYTKOWSKA</h1></div>
            <div className="project-details-container">
                <ImageGallery items={images}/>
                <div className="project-details-heading"><h2>Poręba Spytkowska</h2></div>
                <div className="collapseheaderitem">
                    <div className="colitems">
                        <CollapsibleItem title="Informacje Ogólne" technologia='' cost=""
                                         area={<>{generalinfo.area} <br/> {generalinfo.garagearea}
                                             <br/> {generalinfo.heating} <br/>Tel.: {generalinfo.tel}</>}/>
                        <CollapsibleItem title="Metraż" metraz={<>{m.parter}<br/>{m.poddasze}</>} technologia=''/>
                        <CollapsibleItem title="Technologia" technologia={t}/>
                        <CollapsibleItem cost="Do uzgodnienia" title="Cena" metraz="" technologia=''/>

                    </div>

                    <div className="project-details-description section vertical-line">
                        Projekt nowoczesnego domu w stylu stodoły, który wraz z efektownym wyglądem bryły oferuje
                        wygodne,
                        funkcjonalne wnętrze. Z domem bryłowo łączy się jednostanowiskowy garaż, który zaprojektowany
                        został
                        z boku budynku. Modne materiały wykończeniowe, połączenie jasnego tynku z drewnianą okładziną
                        oraz
                        grafitowe akcenty tworzą efektowną wizualnie kompozycję. Bezokapowy dach został wykończony
                        antracytową blachą z łączeniem na rąbek. Wspaniale prezentuje się elewacja ogrodowa z
                        panoramicznym
                        przeszkleniem, które otwiera imponujący widok na ogród. Wnętrze domu to starannie przemyślany
                        program funkcjonalny z optymalnym układem pomieszczeń. Salon z nastrojowym kominkiem to miejsce
                        rodzinnych spotkań i relaksu. Płynnie łączy się z jadalnią, w której można rozłożyć duży stół.
                        Ozdobą wnętrza jest nowoczesne, przesuwne przeszklenie, zapewniające wygodne wyjście na
                        osłonięty
                        szerokim podcieniem taras. Kuchnia w „Domu w papawerach 2” to funkcjonalnie zorganizowana, jasna
                        przestrzeń z obszernym blatem do pracy, barkiem śniadaniowym i odpowiednią ilością miejsc do
                        przechowywania, które dodatkowo uzupełnia usytuowana pod schodami spiżarnia. W tej części domu
                        przewidziano przejście do garażu, dzięki czemu szybko i wygodnie rozpakujemy zakupy spożywcze.
                        Program użytkowy parteru obejmuje również wygodną sypialnię gościnną i zaprojektowaną na jej osi
                        jasną łazienkę z prysznicem. Kotłownia gazowa została połączona z funkcją pralni i dostępna jest
                        z
                        wiatrołapu. Na poddaszu mieści się komfortowy apartament rodziców z łazienką i garderobą,
                        panoramicznym widokiem na ogród oraz wygodną strefą telewizyjną. W praktyczny sposób oddzielono
                        strefę rodziców od dzieci, projektując dwa pokoje dla najmłodszych domowników po przeciwnej
                        stronie
                        schodów. W łazience można zastosować program z wanną oraz prysznicem. „Dom w papawerach 2” to
                        interesująca propozycja z kolekcji: projekty domów nowoczesnych, projekty domów w stylu
                        nowoczesnej
                        stodoły, projekty domów z poddaszem użytkowym. W ofercie dostępne są również inne wersje
                        projektu.
                    </div>
                </div>
            </div>


        </Layout>
    )
}
export default Details