import { endTime, startTime } from "hono/timing";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Result(){

    const inputParams = [{
        id: "1337420"
    }]

    const resultParams = [{
        simulationId: "1337420",
        status: "done!",
        startTime: "31.01.2026",
        endTime: "31.12.2026",
        configFile: "someFile",
        resultFile: "array aus Files",
        plotFiles: "array aus PlotFiles",
        errorMessage: "kein fehler aufgetreten"
    }]

    return(
        <>
        <Navbar />
        <h1>Result View</h1>
        <h2>Hier können durchgeführte Simulationen über ihre id geladen werden.</h2>
        gib hier die id der simulation ein, um die ergebnisse zu laden:
        beispiel: {inputParams[0].id}
        <input type="text" />
        <Link to={"/"}>Zurück</Link>
        <Footer />
        </>
    )

}