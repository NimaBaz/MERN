import axios from 'axios'
import React, { useState } from 'react';

const StarshipsAPI = () => {
    const [starships, setStarships] = useState([]);

    const fetchData = () => {
        axios.get("https://swapi.dev/api/starships/")
        .then((response) => {
            console.log("This is our GET request: ", response.data.results)
            setStarships(response.data.results)
        })
        .catch((err) => {
            console.log("This is our catch error: ", err)
        })
        console.log("This is called Asynchronous code")
    }

    return (
        <div>
            <hr />
            <h2>Starships</h2>
            <button onClick={fetchData} className="btn btn-outline-dark mt-5">Hit Me!</button>
            {
                starships.map((ship, idx) => {
                    return (
                        <div key={idx}>
                            <ul>
                                <li>{ship.name}</li>
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default StarshipsAPI;