import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Card = (params) => {
    console.log("inside card")
    console.log(params)
    
    const handleClick = () => {
        window.open(params.url);
    }

    return(
        <div className = "creatorCard">
            <img src = {params.imageUrl} alt = "Image of the creator"/>
            <h1>{params.name}</h1>
            <p>{params.description}</p>
            <button onClick={handleClick}>Learn more!</button>
        </div>
    )
}

export default Card;