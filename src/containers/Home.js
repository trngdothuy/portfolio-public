import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom'

// import "./styles.css";

function Home() {

return (
    <>
    <div className="full-block-home">
        <div class="block-1"></div>
        <div class="block-2">
            <h5>Hi all, I am</h5>
            <h1 className="pink-text">Trang Do Thuy</h1>
            <h3 className="blue-text">&gt; Full-Stack Developer</h3>
            <br/>
            <h6 className="purple-text"> &#47;&#47; 	&nbsp;complete the game to continue</h6>
            <h6 className="purple-text"> &#47;&#47; 	&nbsp;you can also see it on my Github page</h6>
            <h6> <span  className="orange-text">const</span> <span className="green-text">githubLink</span> <span className="white-text">=</span> <span className="yellow-text">"https://github.com/trngdothuy"</span></h6>
            {/* <button className="big-button" type= "button" onClick={()=>navigate('/factorytour')}>See more</button> */}
        </div>
        <div class="block-3">
            <h5>Pictures</h5>
        </div>
    </div></>
);
}

export default Home;
