import axios from 'axios';
import React, { useState } from "react";


const Form = () => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const Search = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/items/new', {
            title,
            price,
            description
        })
        .then((response) => {
            console.log("This is our GET request: ", response)
        })
        .catch((err) => {
            console.log("This is our catch error: ", err)
        })
        console.log("This is called Asynchronous code")
    }

    return (
    <form onSubmit={Search} className="form-group">
        <label>Item: </label> <br />
        <input className="form-control" type="text" onChange={e => setTitle(e.target.value)} value={title} />
        
        <label> Price: </label> <br />
        <input className="form-control" type="number" onChange={e => setPrice(e.target.value)} value={price} />

        <label> Description: </label> <br />
        <input className="form-control" type="text" onChange={e => setDescription(e.target.value)} value={description} />

        <input type="submit" value="Submit" />
    </form>
    );
}

export default Form;