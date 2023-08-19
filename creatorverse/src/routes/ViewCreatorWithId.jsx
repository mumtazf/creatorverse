import { useParams } from "react-router-dom";
import ViewCreator from "../Pages/ViewCreator";
  
  const ViewCreatorWithId = (props) => {
    const { id } = useParams(); // Get the id from the URL
    console.log("iN VIEW CREATOR", props)
    console.log("first prop one", props.data[0].id)
    const creatorData = props.data.find(creator => creator.id == id); // Find the specific creator based on id

    if (!creatorData) {
        return <div>Loading...</div>; // Handle loading state
    }

    console.log("creator data is", creatorData)
    return <ViewCreator data={creatorData} />;
  }

  export default ViewCreatorWithId;