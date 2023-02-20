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
            original: 'https://i.postimg.cc/8C7SrMF5/PAPAWERY-02-0-01-foto1-CMYK.jpg',
            thumbnail: "https://i.postimg.cc/DZbnRLFD/PAPAWERY-02-0-01-foto1-CMYK.png",
        },
        {
            //https://postimg.cc/MvKVmVzN
            thumbnail: 'https://i.postimg.cc/3rjJ3rbM/mokr1.jpg',
            original: "https://i.postimg.cc/MTS2LVwn/mokr1.jpg",
        },
        {
            //https://postimg.cc/MvKVmVzN
            thumbnail: 'https://i.postimg.cc/6pq9Vr6w/mokr2.jpg',
            original: "https://i.postimg.cc/Y0d5jPWF/mokr2.jpg",
        },
        {
            //https://postimg.cc/MvKVmVzN
            thumbnail: 'https://i.postimg.cc/WbXNJWvX/mokr3.jpg',
            original: "https://i.postimg.cc/J07wr8Gm/mokr3.jpg",
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
            original: 'https://i.postimg.cc/jjPM9Smc/projekt-dom-w-papawerach-2-84e2ed358276ae50d1096ff7d1816382-11817.gif',
            thumbnail: 'https://i.postimg.cc/Pqs4mkJw/projekt-dom-w-papawerach-2-84e2ed358276ae50d1096ff7d1816382-11817.png',
        },
        {
            original: 'https://i.postimg.cc/764Kyyyk/projekt-dom-w-papawerach-2-b6bd60631370038d4f9ba2f8a1c70dc5-11815-1.gif',
            thumbnail: 'https://i.postimg.cc/CKG476n6/projekt-dom-w-papawerach-2-b6bd60631370038d4f9ba2f8a1c70dc5-11815-1.png',
        },
        {
            original: 'https://i.postimg.cc/tCZbYXBC/mokrd2.jpg',
            thumbnail: 'https://i.postimg.cc/hGxbj7db/mokrd2.jpg',
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



    const t = {
        brama: 'Brama: Hormann',
    };
    return (
        <Layout>
            <div className="container"><h1>Dom w Mokrzyskach 2</h1></div>
            <div className="project-details-container">
            <div style={{backgroundColor: '#f0f0f5', border: '1px solid grey', borderRadius: '10px'}}>
                <ImageGallery items={images}/>
                </div>
                <div className="project-details-heading"><h2>Dom w Mokrzyskach</h2></div>
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
                        Nowoczesny, a przy tym bardzo funkcjonalny dom z fantastycznymi przeszkleniami spełnia wszystkie warunki do tego, by czuć się w nim szczęśliwie. Jego przestronność i doskonałe doświetlenie sprawiają, że przepełnia go dobra aura, a także wrażenie luksusu  – wszak ma się do dyspozycji nie tylko piękne wnętrze, ale także własne promienie słońca!
                        Do wygody, jaką oferuje ten stylowy dom, dochodzą uroki prestiżowej, a przy tym bardzo malowniczej okolicy. W sąsiedztwie domu znajdują się bowiem wspaniałe, gęste lasy, których widokiem można się cieszyć, spoglądając z okna. Dom w takiej lokalizacji z pewnością zapewni poczucie spokoju i da szansę zarówno na dobrą zabawę, jak i odprężenie – jest bowiem i natura na wyciągnięcie ręki, i wygoda na najwyższym poziomie.
                        Piękna działka, licząca około 8,5 arów, stanie się prawdziwym azylem, bowiem ani z tyłu domu, ani od frontu nie powstaną żadne nowe zabudowania. Dzięki temu, mimo ogromnych okien, będzie się miało poczucie prywatności i intymności. Eleganckie i nowoczesne, a zarazem niewielkie osiedle (tylko 5 domów w ciągu!), usytuowane będzie wzdłuż drogi, która pozostaje wyłącznie do własnego użytku mieszkańców. To daje gwarancję spokoju, a mała społeczność pozwoli na stworzenie przyjacielskiej, miłej sąsiedzkiej atmosfery.
                        Wspaniały, rodzinny dom w stylu „nowoczesnej stodoły” już wkrótce będzie dostępny w naszej ofercie – zapraszamy wszystkich, którzy marzą o znalezieniu swojego azylu.

                    </div>
                </div>
                <div className='project-details-description'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/mrmhFEY5K4c"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
            </div>


        </Layout>
    )
}
export default Details