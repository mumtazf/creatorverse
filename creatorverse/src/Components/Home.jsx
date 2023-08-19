import {Link} from 'react-router-dom'
import ShowCreators from '../Pages/ShowCreators';

const Home = (creator) => {
    console.log("grom home")
    console.log(creator)

    return (
        <div className="home">
            <div className="welcome">
                <div className='welcome_text'>
                    <h2>ProductiVerse</h2>
                    <p>Enter into your world of favorite productivity content creators. Explore new creators or find your next role model.</p>
                </div>
            </div>
            <div className="welcome_second">
                <Link to = '/new'><button>Add new</button></Link>
                <Link to = "/creators"><button>View all Creators</button></Link>
            </div>
                <ShowCreators data = {creator.data} />
        </div>
    )
}

export default Home;