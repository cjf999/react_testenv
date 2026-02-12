import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function Setup(){

    //sim parameters
    // var simID = 1337;
    // var startTime;
    // var endTime;
    // var ID;

    //dummy params, echte params sollten über die inputs erstellt, und als JSON versendet werden
    const params = [
        {
        popSize: 100000, 
        transmissionRate: 0.5,
        avgHouseholdSize: 2,
        avgOfficeSize: 5,
        avgSchoolSize: 100,
        intervention: "self-isolation",
        startDate: "01.01.2025",
        endDate: "31.01.2025",
        seed: 1337
        }
    ]

    /** 
    interface simData {
        populationSize: number; // zwischen 0 und 1,000,000
        transmissionRate: number; // zwischen 0.1 und 0.9
        avgHouseholdSize: number;
        avgOfficeSize: number;
        avgSchoolSize: number;
        batchRuns: 1; //idk ob das geht
        interventions: string;
        startDate: string;
        endDate: string;
        seed: number;
    }
    */

    return(
        <>
        <Navbar />
            <h2 style={{paddingLeft: "50px", marginTop: "35px"}}>Nachfolgend die Parameter eingeben:</h2>
            <div className="input-rows">
                <div className="setup-row">
                    <div className="param">
                        <p>Hier wird die  <i>Populationsgröße</i> eingegeben</p>
                        <input type="text" />
                        <div>{params.map((item) => (
                            <p style={{fontWeight: "800"}}>Der Placeholder-Wert ist: {item.popSize}</p>
                        )
                        )}</div>
                    </div>
                    <div className="param">
                        <p>Hier wird die <i>Übertragungsrate</i> angegeben</p>
                        <input type="text" />
                        <div>{params.map((item) => (
                            <p style={{fontWeight: "800"}}>Der Placeholder-Wert ist: {item.transmissionRate}</p>
                        )
                        )}</div>
                    </div>
                    <div className="param">
                        <p>Hier wird die <i>Intervention</i> angegeben</p>
                        <input type="text" />
                        <div>{params.map((item) => (
                            <p style={{fontWeight: "800"}}>Der Placeholder-Wert ist: {item.intervention}</p>
                        )
                        )}</div>                        
                    </div>
                </div>
                {/** second row */}
                 <div className="setup-row">
                    <div className="param">
                        <p>Hier wird die <i>Household Size</i> angegeben</p>
                        <input type="text" />
                        <div>{params.map((item) => (
                            <p style={{fontWeight: "800"}}>Der Placeholder-Wert ist: {item.avgHouseholdSize}</p>
                        )
                        )}</div>
                    </div>
                    <div className="param">
                        <p>Hier wird die <i>School Size</i> angegeben</p>
                        <input type="text" />
                        <div>{params.map((item) => (
                            <p style={{fontWeight: "800"}}>Der Placeholder-Wert ist: {item.avgSchoolSize}</p>
                        )
                        )}</div>                        
                    </div>
                    <div className="param">
                        <p>Hier wird die <i>Office Size</i> angegeben</p>
                        <input type="text" />
                        <div>{params.map((item) => (
                            <p style={{fontWeight: "800"}}>Der Placeholder-Wert ist: {item.avgOfficeSize}</p>
                        )
                        )}</div>                        
                    </div>
                </div>
                {/** third row */}
                <div className="setup-row">
                    <div className="param">
                        <p>Hier wird das <i>Startdatum</i> angegeben</p>
                        <input type="text" />
                        <div>{params.map((item) => (
                            <p style={{fontWeight: "800"}}>Der Placeholder-Wert ist: {item.startDate}</p>
                        )
                        )}</div>                        
                    </div>
                    <div className="param">
                        <p>Hier wird das <i>Enddatum</i> angegeben</p>
                        <input type="text" />
                        <div>{params.map((item) => (
                            <p style={{fontWeight: "800"}}>Der Placeholder-Wert ist: {item.endDate}</p>
                        )
                        )}</div>                        
                    </div>
                    <div className="param">
                        <p>Hier wird der <i>Seed</i> angegeben</p>
                        <input type="text" />
                        <div>{params.map((item) => (
                            <p style={{fontWeight: "800"}}>Der Placeholder-Wert ist: {item.seed}</p>
                        )
                        )}</div>                        
                    </div>
                </div>
                <div className="button-container">
                    <Link to={"/received"}  className="start-button">Sim starten</Link>
                </div>                 
            </div>       
            <Footer />        
        </>
    )
}

export default Setup;