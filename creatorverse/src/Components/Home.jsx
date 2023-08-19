import {Link} from 'react-router-dom'

const Home = () => {

    return (
        <div className="home">
            <div className="welcome">
                <h2>Welcome to CreatorVerse!</h2>
                <p>Enter into your world of favorite creators. Explore new artists or find your next role model.</p>
            </div>
            <div className="welcome_second">
                <Link to = '/new'><button>Add new</button></Link>
            </div>
        </div>
    )
}

export default Home;