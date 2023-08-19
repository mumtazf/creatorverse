import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";

const ViewCreator = (props) => {
        console.log("in view creator hiii   ")
        console.log(props)

        const creatorData = props.data;

    return(
        <div className='ViewCreator'>
            <img src = {creatorData.imageUrl} alt = "creator's image"/>
            <h2>{creatorData.name}</h2>
            <p>{creatorData.description}</p>
            <p>You can read more about them here: <a href = {creatorData.url}>Link to their page</a></p>
            <Link to = {"/edit/" + creatorData.id}><button>Edit</button></Link>
        </div>
    )
}

export default ViewCreator;