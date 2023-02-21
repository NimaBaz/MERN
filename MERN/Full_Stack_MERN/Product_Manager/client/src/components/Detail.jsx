import axios from 'axios'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'



const Details = () => {

    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/items/${id}`)
            .then(response => {
                console.log("This is our GET request: ", response)
                setItems(response.data.results)
            })
            .catch((err) => {
                console.log("This is our catch error: ", err)
            })
            console.log("This is called Asynchronous code")
    }, [id])

    return (
        <div>
            <ul>
                <li>Item: {items.title}</li>
                <li>Price: {items.price}</li>
                <li>Description: {items.description}</li>
                <Link to={`/item/${items._id}/edit`} className="tabs">
                    <button className='btn btn-outline-warning'>Edit</button>
                </Link>
            </ul>
        </div>
    )
}

export default Details;