import axios from 'axios';
import React, { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import Form from "../components/ItemForm";



const Main = () => {

    const [item, setItem] = useState([]);
    const [loaded, setLoaded] = useState(false);

    
    useEffect(() => {
        axios.get('http://localhost:8000/api/items')
            .then(response => {
                console.log("This is our GET request: ", response)
                setItem(response.data.results)
                setLoaded(true)
            })
            .catch((err) => {
                console.log("This is our catch error: ", err)
            })
            console.log("This is called Asynchronous code")
    }, [])

    return (
        <div className="main">
            <h1>Product Manager</h1>
            <h2>Lets add in our items!</h2>

            <Form />
            <hr />
            {loaded && <ItemList item={item}/>}

        </div>
    );
};

export default Main;