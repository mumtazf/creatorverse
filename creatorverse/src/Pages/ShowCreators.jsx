import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';

const ShowCreators = (props) => {

    const [creators, setCreators] = useState([]);

    useEffect(() => {
        console.log("creators")
        setCreators(props.data);
        console.log(creators)
    },[props.data]);
    
    return (
        <div className="showCreators">
            <h1>Creator's Wall of Fame</h1>
            {
                creators && creators.length > 0 ?
                creators.map((creator, index) => 
                    <div className='showRow'>
                        <Card id={creator.id} name={creator.name} description={creator.description} url={creator.url} imageUrl = {creator.imageUrl}/>
                    </div>
                    ) : <h2>{'No Creators Added Yet 😞'}</h2>
            }
        </div>  
    )
}

export default ShowCreators;