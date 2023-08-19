//so what do I need
//a form to input the values
//how do i write a form?
import {supabase} from '../client'
import React from 'react';
import {useState} from 'react';
import './AddCreator.css'


const AddCreator = () => {

    const [creator, setCreator] = useState(null);

    const handleChange = (event) => {
        const {name, value} = event.target;


        setCreator(prevPost => ({
            ...prevPost,
            [name]: value
        }))
    }

    const addCreator = async(event) => {
        event.preventDefault();

        await supabase.from('creators').insert({name: creator.creator_name, description: creator.creator_description, url: creator.creator_url, imageUrl: creator.creator_image});
        window.location = "/";
    }

return(
    <div className="addCreator">
        <form>
            <label for= "name">Name of the creator</label>
            <input type = "text" id = "creator_name" name = "creator_name" label = "Creator's name" onChange={handleChange}></input>

            <label for= "description">Describe them in a line or two</label>
            <input type = "text" id = "creator_description" name = "creator_description" label = "Creator's description" onChange={handleChange}></input>

            <label for= "url">Link to any of their social media accounts</label>
            <input type = "text" id = "creator_url" name = "creator_url" label = "Creator's URL" onChange={handleChange}></input>

            <label for= "image">Link to their image</label>
            <input type = "text" id = "creator_image" name = "creator_image" label = "Creator's image" onChange={handleChange}></input>

            <input type = "submit" value = "Create" onClick = {addCreator} />
        </form>

    </div>
)

}

export default AddCreator;