import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Home = ({ loggedIn, email }) => {
    const navigate = useNavigate();

    const onButtonClick = () => {
        // Navigate to the login page when the button is clicked
        navigate('/Login');
    };

    return (
        <div className="mainContainer">
            <div className="titleContainer">
                <img src="https://th.bing.com/th/id/OIP.ZiLXGfzogeT1nwqe7O_voAHaFj?rs=1&pid=ImgDetMain" alt="Welcome icon" className="welcomeIcon" />
                <div>Welcome!</div>
            </div>
            <button onClick={onButtonClick}>Login</button>

            <div className="buttonContainer">
                {loggedIn ? (
                    <div>Your email address is {email}</div>
                ) : (
                    <>
                        
                        <div className="menuOption"></div>
                        <div className="menuOption"></div>
                        <div className="menuOption"></div>
                        <div className="menuOption"></div>
                        <div className="menuOption"></div>
                        <div className="menuOption"></div>
                        <div className="menuOption"></div>
                        <div className="menuOption"></div>
                        <div className="menuOption"></div>
                        <div className="menuOption"></div>
                        <div className="menuOption"></div>
                        <div className="menuOption"></div>
                        <div className="menuOption"></div>
                        <div className="menuOption"></div>
                        <div className="menuOption"></div>
                        <div className="menuOption"></div>
                        <div className="menuOption"></div>
                        <div className="menuOption"></div>
                        <div className="menuOption"></div>
                        <div className="menuOption"></div>
                    </>
                )}

                
<Link to={window.location.pathname} className="menuOption">Home</Link>

<Link to="/About" className="menuOption">About Us</Link>
 
                <Link to="/Menu" className="menuOption">What’s On?</Link>
                <Link to="/Restaurants" className="menuOption">Restaurants</Link>
                <Link to="/Contact" className="menuOption">Contact Us</Link>
           
            </div>

            <div className="spacer"></div> {/* Add a spacer */}
            <div>
                <strong>We offer a delicious variety of home-style food that the whole family can enjoy!</strong>
            </div>

            <div className="imageContainer">
                <img src="https://th.bing.com/th/id/OIP.lX8wCthfVObgNy1RHKSEngHaFj?w=259&h=194&c=7&r=0&o=5&pid=1.7" alt="Home-style food" className="foodImage" />
                <img
                    src="https://th.bing.com/th/id/OIP.WzoJyzbgoqX8lMjkHgbILQHaGn?w=201&h=180&c=7&r=0&o=5&pid=1.7"
                    alt="Another image"
                    className="foodImage"
                />
                <img
                    src="https://tvg-blog.s3.amazonaws.com/uploads/2013/11/Buffet-at-The-Oyster-Box-TravelGround.jpg"
                    alt="image"
                    className="foodImage"
                />
            </div>
            <div className="eventInfo"></div>
            <div className="eventInfoSameLine">
                <p>Breakfast:</p>
                <p>Time: 08H30 - 12H30</p>
                <p>Venue: Soshanguve South</p>
                <p>Location: South Campus</p>
                <p>Call - 0113597515 (or Book Online by filling the form in Contact)</p>
            </div>
        </div>
    );
};

export default Home;
