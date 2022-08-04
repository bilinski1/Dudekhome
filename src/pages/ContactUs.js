import React from "react";
import "../styles/ContactUs.scss";
import Layout from "../components/layout";
import "../styles/Projekt.scss";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Helmet} from "react-helmet";

const ContactUs = () => {
    return (
        <Layout>
            <Helmet>
                <title>Dudekhome - Kontakt</title>
                <link rel="canonical" href="https://dudekhome.com"/>
                <meta name="description" content="Nieruchomości oraz działki w urokliwych okolicach małopolski, nowoczesne stajnie, domy szkieletowe" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Helmet>
            <div className="contact-container">
                <h1 className="hero-heading">Kontakt</h1>
            </div>
            <div className="info-wrapper">

                    <div className="section-wrapper">
                        <TextField className="pad5" id="outlined-basic" label="Email" variant="outlined" />
                        <TextField className="pad5" id="outlined-basic" label="Telefon" variant="outlined" />
                        <TextField className="pad5" id="outlined-basic" label="Wiadomość" variant="outlined" />
                        <Button variant="outlined"  sx={{
                            color: 'Black'
                        }}>Wyślij</Button>
                    </div>
                    <div className="section-wrapper">
                        <div>DUDEKHOME</div>
                        <div>Adres:</div>
                        <div>Dudekhome 32 800 Brzesko</div>
                        <div>ul. Wodna 24</div>
                        <div>Telephone no.: +48 665 617 404</div>
                        <div>NIP: 8691931106</div>
                        <div>REGON: 121847501</div>
                    </div>

                </div>


        </Layout>
    )
}

export default ContactUs;