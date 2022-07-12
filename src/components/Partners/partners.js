import React from "react";
import "./partners.scss";
import Janickainteriors from "../../images/partners-janicka.png"
import Autoporty from "../../images/partners-autoporty.png"
import Mark from '../../images/LOGO3.jpeg'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Partners = () => {
    return (
        <div className="section-wrapper">
            <h2>NASI PARTNERZY</h2>
            <div className="partners-section">
                <div>
                    <a target="_blank" href="https://www.janickainteriors.com/">
                    <div><h3>Janicka Interior Design</h3>www.janickainteriors.com</div>
                    <img src={Janickainteriors} alt="Janicka Interiors"/>
                    </a>
                </div>
                <div>
                    <a target="_blank" href="https://autoporty.com">
                    <div><h3>Autoporty</h3>Autoporty.com</div>
                    <img src={Autoporty} alt="autoporty.com"/>
                    </a>
                </div>
                <div>
                    <a target="_blank" href="https://mark-brzesko.pl">
                    <div><h3>Mark Brzesko</h3>mark-brzesko.pl</div>
                    <img src={Mark} alt="Mark Brzesko"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Partners;

