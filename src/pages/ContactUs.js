import React from "react";
import "../styles/ContactUs.scss";
import Layout from "../components/layout";
import "../styles/Projekt.scss";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ContactUs = () => {
    return (
        <Layout>
            <div className="contact-container">
                <h1 className="hero-heading">KONTAKT</h1>
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