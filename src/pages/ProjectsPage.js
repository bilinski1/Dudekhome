import React from "react";
import "../styles/Projekt.scss"
import Layout from "../components/layout"
import Projekt from "./Projekt";
import {Helmet} from "react-helmet";

const ProjectsPage = () => {
    return (
        <Layout>
            <Helmet>
                <title>Dudekhome - Projekty i Realizacje</title>
                <link rel="canonical" href="https://dudekhome.com"/>
                <meta name="description" content="Nieruchomości oraz działki w urokliwych okolicach małopolski, nowoczesne stajnie, domy szkieletowe" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Helmet>
        <Projekt/>
        </Layout>
    )
}

export default ProjectsPage;
