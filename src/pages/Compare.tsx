import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Compare(){
    return(
        <>
        <Navbar />
        <h1>Compare View</h1>
        <div className="" style={{textAlign: "center"}}>
            <p>Zwei Simulationen vergleichen</p>
        </div>
        <div style={{textAlign: "center"}}>
            <Link to={"/"}>Zurück</Link>
        </div>
        <Footer />
        </>
    )
}

export default Compare;