//so what do I need
//a form to input the values
//how do i write a form?
import {supabase} from '../client'


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
            <label for= "name"></label>
            <input type = "text" id = "creator_name" name = "creator_name" label = "Creator's name" onChange={handleChange}></input>

            <label for= "description"></label>
            <input type = "text" id = "creator_description" name = "creator_description" label = "Creator's description" onChange={handleChange}></input>

            <label for= "url"></label>
            <input type = "text" id = "creator_url" name = "creator_url" label = "Creator's URL" onChange={handleChange}></input>

            <label for= "image"></label>
            <input type = "text" id = "creator_image" name = "creator_image" label = "Creator's image" onChange={handleChange}></input>

            <input type = "submit" value = "Create" onClick = {addCreator} />
        </form>

    </div>
)

}

export default AddCreator;