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
        area: 'Powierzchnia: 128,04 m2',
        tel: '3235434535'

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



    const t = {
        brama: 'Brama: Hormann',
    };
    return (
        <Layout>
            <div className="container"><h1>Mokrzyska #1</h1></div>
            <div className="project-details-container">
                <ImageGallery items={images} />
                <div className="project-details-heading"><h2>Dom w Mokrzyskach</h2></div>
                <div className="collapseheaderitem">
                    <div className="colitems">
                        <CollapsibleItem title="Informacje Ogólne" technologia='' cost=""
                                         area={<>{generalinfo.area} <br/> {}
                                             <br/> {} <br/>Tel.: {generalinfo.tel}</>}/>
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
                        Ten stylowy, urzekający swoją estetyką i funkcjonalnością nowoczesny dom, położony w niezwykle urokliwej okolicy, z pewnością spełni rodzinne marzenia o tym, by mieć swój raj na ziemi. Zapewni odpowiednią ilość miejsca dla każdego i wygodę, a przy tym zachwyci swoim wyglądem. Ogromne przeszklenia zapewnią mnóstwo naturalnego światła, a co za tym idzie – dobrej energii.
                        Piękna działka o powierzchni około 8,5 arów położona jest w sąsiedztwie cudownych, soczyście zielonych lasów, dzięki czemu o każdej porze roku będzie się miało zachwycający widok z okien. Co najważniejsze – wspaniałego wrażenia nie zepsują kolejne inwestycje, ponieważ zabudowa zorientowana będzie wyłącznie na boki – zarówno z tyłu domu, jak i od frontu pozostanie wolna przestrzeń do rozkoszowania się urokami okolicy. Jednocześnie takie rozwiązanie sprzyja poczuciu intymności i kameralności domu mimo dużej ekspozycji wnętrza.
                        Do posesji prowadzi prywatna droga tylko na użytek mieszkańców, a sąsiedztwo takich samych zabudowań (tylko 5 domów w ciągu!) pozwoli utworzyć małą, przyjazną społeczność, co z pewnością podniesienie jakość życia. Niewielkie, eleganckie i nowoczesne osiedle zapewni poczucie spokoju, zaś przestronny, komfortowy dom spełni wszystkie oczekiwania tych, którzy marzą o własnej, pięknej przestrzeni w równie pięknym miejscu.
                        Ten wyjątkowy projekt „nowoczesnej stodoły” niebawem pojawi się w naszej ofercie – zachęcamy do śledzenia wszystkich, którzy poszukują swojego wymarzonego lokum.
                    </div>
                </div>

            </div>
<div className='partners-section'>
            <div className='pad5'>
                <iframe width="460" height="315" src="https://www.youtube.com/embed/mrmhFEY5K4c"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </div>
            <div className='pad5'>
                <iframe width="460" height="315" src="https://www.youtube.com/embed/vXKNQXXwU_w"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </div>
</div>
        </Layout>
    )
}
export default Details