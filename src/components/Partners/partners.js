import React from "react";
import "./partners.scss";
import Janickainteriors from "../../images/partners-janicka.png"
import Autoporty from "../../images/partners-autoporty.png"

const Partners = () => {
    return (
            <div className="section-wrapper">
            <h2>NASI PARTNERZY</h2>
                <div className="partners-section">
                    <div>
                        <div>Janicka Interior Design</div>
                        <img src={Janickainteriors} alt="Janicka Interiors"/>
                    </div>
                        <div>
                            <div>Autoporty.com</div>
                            <img src={Autoporty} alt="autoporty"/>
                                </div>
                </div>
            </div>
    )
}

export default Partners;

