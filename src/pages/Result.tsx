import { useEffect, useState, useMemo } from "react";
import { endTime, startTime } from "hono/timing";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link, useLocation } from "react-router-dom";

export default function Result() {

    const { state } = useLocation();
    const [simulationId, setSimulationId] = useState("");
    const [data, setData] = useState(null);

    useEffect(() => {
        setSimulationId(state?.simId || "");
    }, [state])

    useEffect(() => {
        fetchData(simulationId);
    }, [simulationId])

    const fetchData = (simId: string | null) => {
        if (!simId) return;
        console.log("fetching", "https://gems.hciuse.sh/simulations/" + simId)
        fetch("https://gems.hciuse.sh/simulations/" + simId).then(async res => {
            setData(await res.json())
        });
    }

    useEffect(() => {
        console.log('data:', data);
    }, [data])

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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const simId = data.get("id") as string;
        console.log('looking for simid', simId);
        setSimulationId(simId);
    }

    return(
        <>
        <Navbar />
        <h1>Result View</h1>
        <h2>Hier können durchgeführte Simulationen über ihre id geladen werden.</h2>
        gib hier die id der simulation ein, um die ergebnisse zu laden:
        aktuelle simulation: {simulationId}
        <form onSubmit={handleSubmit} className="result-form">
            <div>
                {
                    simulationId
                    ? <input name="id" type="text" value={simulationId} />
                    : <input name="id" type="text" />
                }
            </div>
        </form>
        <Link to={"/"}>Zurück</Link>
        <Footer />
        </>
    )

}