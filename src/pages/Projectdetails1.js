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
        garagearea: 'Gara??: 22,47m2',
        heating: 'Kot??ownia: 4,82m2',
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
            <div className="container"><h1>POR??BA SPYTKOWSKA</h1></div>
            <div className="project-details-container">
                <ImageGallery items={images}/>
                <div className="project-details-heading"><h2>Por??ba Spytkowska</h2></div>
                <div className="collapseheaderitem">
                    <div className="colitems">
                        <CollapsibleItem title="Informacje Og??lne" technologia='' cost=""
                                         area={<>{generalinfo.area} <br/> {generalinfo.garagearea}
                                             <br/> {generalinfo.heating} <br/>Tel.: {generalinfo.tel}</>}/>
                        <CollapsibleItem title="Metra??" metraz={<>{m.parter}<br/>{m.poddasze}</>} technologia=''/>
                        <CollapsibleItem title="Technologia" technologia={t}/>
                        <CollapsibleItem cost="Do uzgodnienia" title="Cena" metraz="" technologia=''/>

                    </div>

                    <div className="project-details-description section vertical-line">
                        Projekt nowoczesnego domu w stylu stodo??y, kt??ry wraz z efektownym wygl??dem bry??y oferuje
                        wygodne,
                        funkcjonalne wn??trze. Z domem bry??owo ????czy si?? jednostanowiskowy gara??, kt??ry zaprojektowany
                        zosta??
                        z boku budynku. Modne materia??y wyko??czeniowe, po????czenie jasnego tynku z drewnian?? ok??adzin??
                        oraz
                        grafitowe akcenty tworz?? efektown?? wizualnie kompozycj??. Bezokapowy dach zosta?? wyko??czony
                        antracytow?? blach?? z ????czeniem na r??bek. Wspaniale prezentuje si?? elewacja ogrodowa z
                        panoramicznym
                        przeszkleniem, kt??re otwiera imponuj??cy widok na ogr??d. Wn??trze domu to starannie przemy??lany
                        program funkcjonalny z optymalnym uk??adem pomieszcze??. Salon z nastrojowym kominkiem to miejsce
                        rodzinnych spotka?? i relaksu. P??ynnie ????czy si?? z jadalni??, w kt??rej mo??na roz??o??y?? du??y st????.
                        Ozdob?? wn??trza jest nowoczesne, przesuwne przeszklenie, zapewniaj??ce wygodne wyj??cie na
                        os??oni??ty
                        szerokim podcieniem taras. Kuchnia w ???Domu w papawerach 2??? to funkcjonalnie zorganizowana, jasna
                        przestrze?? z obszernym blatem do pracy, barkiem ??niadaniowym i odpowiedni?? ilo??ci?? miejsc do
                        przechowywania, kt??re dodatkowo uzupe??nia usytuowana pod schodami spi??arnia. W tej cz????ci domu
                        przewidziano przej??cie do gara??u, dzi??ki czemu szybko i wygodnie rozpakujemy zakupy spo??ywcze.
                        Program u??ytkowy parteru obejmuje r??wnie?? wygodn?? sypialni?? go??cinn?? i zaprojektowan?? na jej osi
                        jasn?? ??azienk?? z prysznicem. Kot??ownia gazowa zosta??a po????czona z funkcj?? pralni i dost??pna jest
                        z
                        wiatro??apu. Na poddaszu mie??ci si?? komfortowy apartament rodzic??w z ??azienk?? i garderob??,
                        panoramicznym widokiem na ogr??d oraz wygodn?? stref?? telewizyjn??. W praktyczny spos??b oddzielono
                        stref?? rodzic??w od dzieci, projektuj??c dwa pokoje dla najm??odszych domownik??w po przeciwnej
                        stronie
                        schod??w. W ??azience mo??na zastosowa?? program z wann?? oraz prysznicem. ???Dom w papawerach 2??? to
                        interesuj??ca propozycja z kolekcji: projekty dom??w nowoczesnych, projekty dom??w w stylu
                        nowoczesnej
                        stodo??y, projekty dom??w z poddaszem u??ytkowym. W ofercie dost??pne s?? r??wnie?? inne wersje
                        projektu.
                    </div>
                </div>
            </div>


        </Layout>
    )
}
export default Details