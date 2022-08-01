import React from "react";
import "../styles/Projekt.scss"
import projecticon1 from "../images/project1-icon.jpg"
import projecticon2 from "../images/project2icon.jpg"
import projecticon3 from "../images/project3icon.jpeg"
import domwmalinowkach from "../images/Realizacja_Malinowka/domwmalinowkach-kopia.jpg"
import ProjectItem from "./Project/projectItem"
import {Button} from "../components/LayoutElements/Button2";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import ModalImage from "react-modal-image";


import papaweryaicon3 from "../images/Realizacja_Mokrzyska/Icons/rysunek3.jpg";
import papaweryaicon4 from "../images/Realizacja_Mokrzyska/Icons/rysunek4.jpg";
import papaweryaicon5 from "../images/Realizacja_Mokrzyska/Icons/rysunek5.jpg";
import papaweryaicon6 from "../images/Realizacja_Mokrzyska/Icons/rysunek6.jpg";

import papawerybicon1
    from "../images/Realizacja_Poreba/icons/projekt-dom-w-papawerach-2-a-4d68b6bc69b85f7d9afe16243b681455__11264.jpg"
import papawerybicon2
    from "../images/Realizacja_Poreba/icons/papawery2-elewacja ogrodowa.jpg"
import papawerybicon3
    from "../images/Realizacja_Poreba/icons/projekt-dom-w-papawerach-2-a-851ce392705ddab0dea0c897f9e58ce7__11265.jpg"
import papawerybicon4
    from "../images/Realizacja_Poreba/icons/projekt-dom-w-papawerach-2-a-ba8d448d68448161286473d3d1e7a4be__11266.jpg"


const Projekt = () => {


    {/*
    const images = [
        {
            original: `https://picsum.photos/id/1018/1000/600/`,
            thumbnail: `https://picsum.photos/id/1018/250/150/`,
        },
        {
            original: `https://picsum.photos/id/1018/1000/600/`,
            thumbnail: `https://picsum.photos/id/1018/250/150/`,
        },
        {
            original: `https://picsum.photos/id/1018/1000/600/`,
            thumbnail: `https://picsum.photos/id/1018/250/150/`,
        },
    ];
    */
    }
    return (
        <React.Fragment>
            <ProjectItem title={"Poręba Spytkowska"} no={1} url={"/Projectdetails1"}
                         heading={"Dom jednorodzinny z poddaszem użytkowym"}
                         description={"5 pokoi, 1 kuchnia, 3 łazienki, spiżarka, kotłownia, garderoby, garaż"}
                         fieldarea={"10,1 a"} housearea={"128,04"} fieldno={"2234/15"} garagearea={"22,47"}
                         image={projecticon1}
                         imageurl3={papawerybicon1}
                         imageurl4={papawerybicon2}
                         imageurl5={papawerybicon3}
                         imageurl6={papawerybicon4}
            />
            <ProjectItem title={"Mokrzyska 1"} no={2} url={"/Projectdetails2"}
                         heading={"Dom jednorodzinny z poddaszem użytkowym"}
                         description={"4 pokoje, 1 kuchnia, 2 łazienki, kotłownia, garderoby, garaż"}
                         fieldarea={"8,6 a"} housearea={"110,57"} fieldno={"3285/6"} garagearea={"18,93"}
                         image={projecticon2}
                         imageurl3={papaweryaicon3}
                         imageurl4={papaweryaicon4}
                         imageurl5={papaweryaicon5}
                         imageurl6={papaweryaicon6}/>
            <ProjectItem title={"Mokrzyska 2"} no={3} url={"/Projectdetails3"}
                         heading={"Dom jednorodzinny z poddaszem użytkowym"}
                         description={"4 pokoje, 1 kuchnia, 2 łazienki, kotłownia, garderoby, garaż"}
                         fieldarea={"8,6 a"} housearea={"110,57"} fieldno={"3285/6"} garagearea={"18,93"}
                         image={projecticon2}
                         imageurl3={papaweryaicon3}
                         imageurl4={papaweryaicon4}
                         imageurl5={papaweryaicon5}
                         imageurl6={papaweryaicon6}/>
            <ProjectItem no={4} url={"/ProjectsPage"}
                         heading={["Dom jednorodzinny z poddaszem użytkowym", <br/>, <br/>, "WKRÓTCE DOSTĘPNY"]}
                         description={"4 pokoje, 1 kuchnia, 2 łazienki, kotłownia, garderoby, garaż"}
                         fieldarea={"-"} housearea={"-"} fieldno={"-"} garagearea={"-"}
                         image={domwmalinowkach}
                         desc={<div className='description'>'Ten piękny, tradycyjny dom jednorodzinny powstał z myślą o tym, by spełniać marzenia – zapewnić maksimum komfortowej przestrzeni do życia dla wszystkich, z jednoczesnym zachowaniem przytulności, prywatności i poczucia ciepła każdemu z osobna. Funkcjonalne wnętrze zapewni wygodę i da możliwość zaaranżowania domu zgodnie z własnym, indywidualnym rytmem życia każdej rodziny. Znajdzie się więc miejsce na relaks, pracę i rozrywkę, a co najważniejsze – na rodzinne szczęście. '</div>}
            />
            <ProjectItem no={5} url={"/ProjectsPage"}
                         heading={["Dom jednorodzinny z poddaszem użytkowym", <br/>, <br/>, "WKRÓTCE DOSTĘPNY"]}
                         description={"4 pokoje, 1 kuchnia, 2 łazienki, kotłownia, garderoby, garaż"}
                         fieldarea={"-"} housearea={"-"} fieldno={"-"} garagearea={"-"}
                         image={domwmalinowkach}
                         desc={<div className='description'>'Ten piękny, tradycyjny dom jednorodzinny powstał z myślą o tym, by spełniać marzenia – zapewnić maksimum komfortowej przestrzeni do życia dla wszystkich, z jednoczesnym zachowaniem przytulności, prywatności i poczucia ciepła każdemu z osobna. Funkcjonalne wnętrze zapewni wygodę i da możliwość zaaranżowania domu zgodnie z własnym, indywidualnym rytmem życia każdej rodziny. Znajdzie się więc miejsce na relaks, pracę i rozrywkę, a co najważniejsze – na rodzinne szczęście. '</div>}
            />
            <ProjectItem no={6} url={"/ProjectsPage"}
                         heading={["Dom jednorodzinny z poddaszem użytkowym", <br/>, <br/>, "WKRÓTCE DOSTĘPNY"]}
                         description={"4 pokoje, 1 kuchnia, 2 łazienki, kotłownia, garderoby, garaż"}
                         fieldarea={"-"} housearea={"-"} fieldno={"-"} garagearea={"-"}
                         image={domwmalinowkach}
                         desc={<div className='description'>'Ten piękny, tradycyjny dom jednorodzinny powstał z myślą o tym, by spełniać marzenia – zapewnić maksimum komfortowej przestrzeni do życia dla wszystkich, z jednoczesnym zachowaniem przytulności, prywatności i poczucia ciepła każdemu z osobna. Funkcjonalne wnętrze zapewni wygodę i da możliwość zaaranżowania domu zgodnie z własnym, indywidualnym rytmem życia każdej rodziny. Znajdzie się więc miejsce na relaks, pracę i rozrywkę, a co najważniejsze – na rodzinne szczęście. '</div>}
            />

            <div className="item-container">
                <div className="box2 description">
                    <AniLink paintDrip color="white" to="/Projekt">
                        <div className="Button">
                            <Button>Więcej Informacji</Button>
                        </div>
                    </AniLink>
                </div>
                <div className="box"><img src={projecticon3} alt="Logo"/></div>
                <div className="box description"><h4>Działki budowlane</h4>Szukasz działki pod budowę domu? Koniecznie
                    sprawdź, co mamy do zaoferowania!
                </div>
            </div>
        </React.Fragment>
    )
}

export default Projekt;

