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
        {
            original: 'https://i.postimg.cc/kgy7RNk4/1.jpg',
            thumbnail: 'https://i.postimg.cc/bdXB3M2h/1ico.jpg',
        },
        {
            original: 'https://i.postimg.cc/9fFCdRhB/2.jpg',
            thumbnail: 'https://i.postimg.cc/TYgdfv0n/2ico.jpg',
        },
        {
            original: 'https://i.postimg.cc/Jz81hYYv/3.jpg',
            thumbnail: 'https://i.postimg.cc/Pq3h2Xfn/3ico.jpg',
        },
        {
            original: 'https://i.postimg.cc/Dftv9wr2/4.jpg',
            thumbnail: 'https://i.postimg.cc/c1K1kn89/4ico.jpg',
        },

    ];

    const generalinfo = {
        area: 'Powierzchnia: 110,57 m2',
        tel: '+48665617404'

    };

    const parter = {
        hol: 'Hol: 4,37m2',
        pokoj: 'Pokój: 11,51m2',
        wiatrolap: 'Poddasze: 53,20 m2',
        spizarnia: 'Spiżarnia: 4,35m2',
        salon: 'Salon 30,95m2',
        kuchnia: 'Kucnia 7,94m2',
        lazienka: 'Łazienka 2,93m2',
        kotlownia: 'Kotłownia: 4,23m2',
        garaz: 'Garaż: 22,47m2'

    };

    const poddasze = {
        poddaszeschody: 'Hol i Schody: 10,58m2',
        poddaszepokoj: 'Pokój: 20,50m2',
        poddaszelazienka: 'Łazienka: 2,51m2',
        poddaszegarderoba: 'Garderoba: 2,52m2',
        poddaszelazienka2: 'Łazienka: 4,48m2',
        poddaszepokoj2: 'Pokój: 9,84m2',
        poddaszepokoj3: 'Pokój: 10,64m2'
    };

    const technologia = {
        sciana: 'Ściany: bloczek z betonu komórkowego H+H 24 cm, styropian Termo Organika 20 cm, tynk',
        brama: 'Brama: automatyczna',
        strop: 'Strop: płyta żelbetowa',
        scianka: 'Ścianka kolankowa - 100cm',
        dach: 'Dach: dwuspadowy, nachylenie 45 st., więźba drewniana, blacha, okno dachowe',
        piec: 'Kocioł: gazowy',
        ogrzewanie: 'Ogrzewanie podłogowe : zastosowano we wszystkich pomieszczeniach mieszkalnych',
        wentylacja: 'Wentylacja: grawitacyjna',
    };

    return (
        <Layout>
            <div className="container"><h1>Poręba Spytkowska</h1></div>
            <div className="project-details-container">
                <ImageGallery items={images}/>
                <div className="project-details-heading"><h2>Poręba Spytkowska</h2></div>
                <div className="collapseheaderitem">
                    <div className="colitems">
                        <CollapsibleItem title="Informacje Ogólne" technologia='' cost=""
                                         area={<><li>{generalinfo.area} </li><br/> {}
                                             <li>Tel.: {generalinfo.tel}</li></>}/>
                        <CollapsibleItem title="Metraż Parter"
                                         metraz={<><li>{parter.hol}</li>
                                             <br/><li>{parter.pokoj}</li>
                                             <br/><li>{parter.wiatrolap}</li>
                                             <br/><li>{parter.spizarnia}</li>
                                             <br/><li>{parter.salon}</li>
                                             <br/><li>{parter.kuchnia}</li>
                                             <br/><li>{parter.lazienka}</li>
                                             <br/><li>{parter.kotlownia}</li>
                                             <br/><li>{parter.garaz}</li>
                                         </>}
                                         technologia=''/>
                        <CollapsibleItem title="Metraż Poddasze"
                                         metraz={<><li>{poddasze.poddaszeschody}</li>
                                             <br/><li>{poddasze.poddaszepokoj}</li>
                                             <br/><li>{poddasze.poddaszelazienka}</li>
                                             <br/><li>{poddasze.poddaszegarderoba}</li>
                                             <br/><li>{poddasze.poddaszelazienka2}</li>
                                             <br/><li>{poddasze.poddaszepokoj2}</li>
                                             <br/><li>{poddasze.poddaszepokoj3}</li>
                                         </>}
                                         technologia=''/>
                        <CollapsibleItem title="Technologia"
                                         technologia={<><li>{technologia.sciana}</li>
                                             <br/><li>{technologia.scianka}</li>
                                             <br/><li>{technologia.dach}</li>
                                             <br/><li>{technologia.piec}</li>
                                             <br/><li>{technologia.ogrzewanie}</li>
                                             <br/><li>{technologia.brama}</li>
                                             <br/><li>{technologia.strop}</li>
                                             <br/><li>{technologia.wentylacja}</li>
                        </>}/>
                        <CollapsibleItem cost="Do uzgodnienia" title="Cena" technologia=''/>

                    </div>

                    <div className="project-details-description section vertical-line">
                        Nowoczesny, komfortowy i wyjątkowy funkcjonalny dom typu „stodoła” położony w malowniczej Porębie Spytkowskiej to miejsce, które w mig przemieni się w przytulny, rodzinny azyl, zapewniający wygodę i wyjątkowe doznania estetyczne. Tutaj nikomu nie zabraknie miejsca na realizację planów, zabawę, relaks i po prostu dobre życie.
                        Niezwykle urokliwa okolica, w jakiej stoi dom, cieszy się uwielbieniem miłośników spokoju i obcowania z naturą. Piękna działka o powierzchni 10 arów zlokalizowana jest przy lesie, który można podziwiać z dużych okien domu. Cudowna zieleń z pewnością przyniesie ukojenie latem – da odprężenie zmęczonym błękitem nieba oczom, a zimą zaśnieżony pejzaż będzie zachwycał swoją bajkową aurą. Co ciekawe, przy dobrej widoczności można nacieszyć oko widokiem… majestatycznych Tatr! To idealne miejsce na snucie marzeń, dające natchnienie i możliwość całkowitego odprężenia.
                        Do posesji prowadzi prywatna droga, wyłącznie do użytku mieszkańców, dzięki czemu każdy odczuje odrobinę intymności, a na pewno zachwyci się ciszą. Daje to również możliwość rozkoszowania się śpiewem ptaków, którego nie zakłóci szum ulicy. Dom położony jest w eleganckiej, miłej dzielnicy z nowym budownictwem, w której króluje spokój i przyjazna atmosfera. Każdy odnajdzie tutaj idealną przestrzeń dla siebie.
                        Wszystkich, którzy poszukują swojego nowego miejsca na Ziemi, zapraszamy do zapoznania się ze szczegółami naszej oferty.
                        Nowoczesny, komfortowy i wyjątkowy funkcjonalny dom typu „stodoła” położony w malowniczej Porębie Spytkowskiej to miejsce, które w mig przemieni się w przytulny, rodzinny azyl, zapewniający wygodę i wyjątkowe doznania estetyczne. Tutaj nikomu nie zabraknie miejsca na realizację planów, zabawę, relaks i po prostu dobre życie.
                        Niezwykle urokliwa okolica, w jakiej stoi dom, cieszy się uwielbieniem miłośników spokoju i obcowania z naturą. Piękna działka o powierzchni 10 arów zlokalizowana jest przy lesie, który można podziwiać z dużych okien domu. Cudowna zieleń z pewnością przyniesie ukojenie latem – da odprężenie zmęczonym błękitem nieba oczom, a zimą zaśnieżony pejzaż będzie zachwycał swoją bajkową aurą. Co ciekawe, przy dobrej widoczności można nacieszyć oko widokiem… majestatycznych Tatr! To idealne miejsce na snucie marzeń, dające natchnienie i możliwość całkowitego odprężenia.
                        Do posesji prowadzi prywatna droga, wyłącznie do użytku mieszkańców, dzięki czemu każdy odczuje odrobinę intymności, a na pewno zachwyci się ciszą. Daje to również możliwość rozkoszowania się śpiewem ptaków, którego nie zakłóci szum ulicy. Dom położony jest w eleganckiej, miłej dzielnicy z nowym budownictwem, w której króluje spokój i przyjazna atmosfera. Każdy odnajdzie tutaj idealną przestrzeń dla siebie.
                        Wszystkich, którzy poszukują swojego nowego miejsca na Ziemi, zapraszamy do zapoznania się ze szczegółami naszej oferty.
                    </div>
                </div>

            </div>
            <div className='partners-section'>
                <div className='pad5'>
                    <iframe width="460" height="315" src="https://www.youtube.com/embed/S6SFqWVQ6rA"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
                <div className='pad5'>
                    <iframe width="460" height="315" src="https://www.youtube.com/embed/fHkDsqBGGJE"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
            </div>
            <div className='partners-section'>
                <div className='pad5'>
                    <iframe width="460" height="315" src="https://www.youtube.com/embed/KMnuLsxf5mE"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
                <div className='pad5'>
                    <iframe width="460" height="315" src="https://www.youtube.com/embed/8LfSqLChxn4"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
            </div>


        </Layout>
    )
}
export default Details