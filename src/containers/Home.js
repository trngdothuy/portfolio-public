import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom'

// import "./styles.css";

function Home() {

return (
    <>
    <div className="full-block">
        <div class="block-1"></div>
        <div class="block-2">
            <h5>Hi all, I am</h5>
            <h1>Trang Do Thuy</h1>
            <h3>&gt; Full-Stack Developer</h3>
            <br/>
            <h6> &#47;&#47; 	&nbsp;complete the game to continue</h6>
            <h6> &#47;&#47; 	&nbsp;you can also see it on my Github page</h6>
            <h6> const githubLink = "https://github.com/trngdothuy"</h6>
            {/* <button className="big-button" type= "button" onClick={()=>navigate('/factorytour')}>See more</button> */}
        </div>
        <div class="block-3">
            <h5>Pictures</h5>
        </div>
    </div></>
);
}

export default Home;
