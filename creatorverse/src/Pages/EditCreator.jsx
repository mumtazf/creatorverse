//so what do I need
//a form to input the values
//how do i write a form?
import {supabase} from '../client'
import React from 'react';

import {useState} from 'react';
import { useParams } from "react-router-dom";


const EditCreator = () => {

    const [creator, setCreator] = useState(null);
    const {id} = useParams();

    const handleChange = (event) => {
        const {name, value} = event.target;

        setCreator(prevPost => ({
            ...prevPost,
            [name]: value
        }))
    }

    const updateCreator = async(event) => {
        event.preventDefault();

        await supabase.from('creators').update({name: creator.creator_name, description: creator.creator_description, url: creator.creator_url, imageUrl: creator.creator_image}).eq('id',id);
        window.location = "/";
    }

    const deleteCreator = async(event) => {
        event.preventDefault();

        await supabase.from('creators').delete().eq('id',id);
        window.location = "/";
    }


return(
    <div className="editCreator">
        <form>
            <label for= "name">Name</label>
            <input type = "text" id = "creator_name" name = "creator_name" label = "Creator's name" onChange={handleChange}></input>

            <label for= "description">Description</label>
            <input type = "text" id = "creator_description" name = "creator_description" label = "Creator's description" onChange={handleChange}></input>

            <label for= "url">Link to socials (either instagram or twitter)</label>
            <input type = "text" id = "creator_url" name = "creator_url" label = "Creator's URL" onChange={handleChange}></input>

            <label for= "image">Image URL</label>
            <input type = "text" id = "creator_image" name = "creator_image" label = "Creator's image" onChange={handleChange}></input>

            <input type = "submit" value = "Edit" onClick = {updateCreator} />
            <input type = "submit" value = "Delete" onClick = {deleteCreator} />

        </form>

    </div>
)

}

export default EditCreator;