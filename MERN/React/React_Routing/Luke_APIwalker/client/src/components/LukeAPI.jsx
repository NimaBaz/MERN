import axios from 'axios'
import React, { useState } from 'react';
import { Routes, Route, Link, useParams } from "react-router-dom";



const LukeAPI = () => {
    const [character, setCharacter] = useState([]);

    const fetchData = () => {
        axios.get("https://swapi.dev/api/people/")
        .then((response) => {
            console.log("This is our GET request: ", response.data.results)
            setCharacter(response.data.results)
        })
        .catch((err) => {
            console.log("This is our catch error: ", err)
        })
        console.log("This is called Asynchronous code")
    }

    return (
        <div>
            <>
            <div className='form-group'>
                Search for: <select>
                    <option>People</option>
                    <option>Planets</option>
                    <option>Starships</option>
                </select>

                ID: <input type="text" className='form-control' />

                <button onClick={fetchData} className="btn btn-outline-dark mt-5">Hit Me!</button>
            </div>
            {
                character.map((char, idx) => {
                    return (
                        <div key={idx}>
                            <ul>
                                <li>{char.name}</li>
                            </ul>
                        </div>
                    )
                })
            }
            </>
        </div>
    )
}

export default LukeAPI;