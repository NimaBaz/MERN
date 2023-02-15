import React from "react";
import LukeAPI from "../components/LukeAPI";
import PlanetsAPI from "../components/PlanetsAPI";
import StarshipsAPI from "../components/StarshipsAPI";
import Form from "../components/Form";
import { Routes, Route, Link} from "react-router-dom";


const MyViews = () => {
    return (
        <div>
            <h1>Star Wars</h1>
            <h2>May the force be with you!</h2>
            <ul className='nav-bar'>
                <li><Link to={"/people/:id"}>Home</Link></li>
                <li><Link to={"/planets/:id"}>Planets</Link></li>
                <li><Link to={"/starships/:id"}>Starships</Link></li>
            </ul>
            <Form />
            <Routes>
                <Route path="/people/:id" element={<LukeAPI />}></Route>
                <Route path="/planets/:id" element={<PlanetsAPI />}></Route>
                <Route path="/starships/:id" element={<StarshipsAPI />}></Route>
            </Routes>
        </div>
    );
};

export default MyViews;