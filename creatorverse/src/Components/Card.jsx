import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom'


const Card = (params) => {
    console.log("inside card")
    console.log('params id is:')
    console.log(params.id)
    
    const viewUrl = `/view/${params.id}`

    return(
        <div className = "creatorCard">
            <img src = {params.imageUrl} alt = "Image of the creator"/>
            <h2>{params.name}</h2>
            <p>{params.description}</p>
            <Link to = {viewUrl}><button>Learn more!</button></Link>
        </div>
    )
}

export default Card;