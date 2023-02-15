import axios from 'axios'
import React, { useState } from 'react';

const PlanetsAPI = () => {
    const [planets, setPlanet] = useState([]);

    const fetchData = () => {
        axios.get("https://swapi.dev/api/planets/")
        .then((response) => {
            console.log("This is our GET request: ", response.data.results)
            setPlanet(response.data.results)
        })
        .catch((err) => {
            console.log("This is our catch error: ", err)
        })
        console.log("This is called Asynchronous code")
    }

    return (
        <div>
            <hr />
            <h2>Planets</h2>
            <button onClick={fetchData} className="btn btn-outline-dark mt-5">Hit Me!</button>
            {
                planets.map((p, idx) => {
                    return (
                        <div key={idx}>
                            <ul>
                                <li>{p.name}</li>
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PlanetsAPI;