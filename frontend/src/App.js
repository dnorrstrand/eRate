import React from "react";
//import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navibar from "./components/Navibar";
import Home from "./components/Home";
import Notes from "./components/Notes";
import Airports from "./components/Airports";
import Carriers from "./components/Carriers";
import Rates from "./components/Rates";
import CreateNotes from "./components/CreateNote";
import CreateRates from "./components/CreateRate";
import CreateAirports from "./components/CreateAirport";
import CreateCarriers from "./components/CreateCarrier";
import './App.css';

function App() {
    return (

        <Router>

            <Route path="/" exact>
                <Navibar />
                <Home />
            </Route>
            <Route path="/notes">
                <Notes />
            </Route>
            <Route path="/rates">
                <Navibar />
                <Rates />
            </Route>
            <Route path="/airports">
                <Airports />
            </Route>
            <Route path="/carriers">
                <Carriers />
            </Route>
            <Route path="/create">
                <CreateNotes />
            </Route>
            <Route path="/createRate">
                <CreateRates />
            </Route>
            <Route path="/createAirport">
                <CreateAirports />
            </Route>
            <Route path="/createCarrier">
                <CreateCarriers />
            </Route>

        </Router>

    )
}

export default App;
