import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export default function SimReceived(){

    //dummy params, echte params sollten von der Serverantwort kommen
    const resultParams = [{
        message: "Simulation erfolgreich gestartet",
        simulationId: "1337420",
        statusUrl: "someURL",
        configFormat: "TOML",
        error: "es gab einen Fehler",
        details: "hier stehen details zum fehler",
    }]

    return(
        <>
        <Navbar />
        <div style={{textAlign: "center"}}>
        <h1>Server-Antwort</h1>
        <h2>Server sagt: {resultParams[0].message}</h2>
        <p>Dein Ergebnis kannst du dir in der Result-Seite laden.</p>
        <Link to={"/"}>Zurück zur Startseite</Link>
        </div>
        <Footer />
        </>
    )

}