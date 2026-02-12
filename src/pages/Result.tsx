import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Result(){
    return(
        <>
        <Navbar />
        <h1>Ergebnis</h1>
        <h2>der letzten Simulation</h2>
        <Link to={"/"}>Zurück</Link>
        <Footer />
        </>
    )

}