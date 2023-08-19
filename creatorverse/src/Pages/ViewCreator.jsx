import React, {useState, useEffect} from 'react'

const ViewCreator = (props) => {

    return(
        <div className='ViewCreator'>
            <img src = {props.image} alt = "creator's image"/>
            <h2>props.name</h2>
            <p>props.description</p>
            <p>You can read more about them here: <a href = {props.url}>Link to their page</a></p>
        </div>
    )
}

export default ViewCreator;