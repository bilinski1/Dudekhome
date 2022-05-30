import React from "react";
import "../styles/ContactUs.scss";
import Layout from "../components/layout";
import "../styles/Projekt.scss";

const ContactUs = () => {
    return (
        <Layout>
            <div className="contact-container">
                <h1 className="hero-heading">KONTAKT</h1>
            </div>
            <div className="item-container">
                <div className="box description">
                    <div className="section-wrapper">
                        <div>DUDEKHOME</div>
                        <div>Adres: </div>
                        <div>Dudekhome 32 800 Brzesko</div>
                        <div>ul. Wodna 24</div>
                        <div>Telephone no.: +48 665 617 404</div>
                        <div>NIP:</div>
                        <div>REGON:</div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ContactUs;