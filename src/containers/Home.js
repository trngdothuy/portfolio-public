import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom'

// import "./styles.css";

function Home() {
    // const location = useLocation()
    const navigate = useNavigate()
// const handleClick = () => console.log('handle click fn called!');

return (
    <>
    <div className="home-block">
        </div>
        <div class="bg-textbox">
            <h5>Hi all, I am</h5>
            <h1>Trang Do</h1>
    <h3>Full-Stack Developer</h3>
    <br/>
    <h6> complete the game to continue</h6>
    <button className="big-button" type= "button" onClick={()=>navigate('/factorytour')}>See more</button>
    </div></>
);
}

export default Home;
