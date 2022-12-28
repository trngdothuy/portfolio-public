import React, { useState, useEffect } from "react";
import Iframe from 'react-iframe'
import {useLocation, useNavigate} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time

// import "./styles.css";

function Home() {

    const [drag, setDrag] = useState({
        activeDrags: 0,
        deltaPosition: {
          x: 0, y: 0
        },
        controlledPosition: {
          x: -400, y: 200
        }
      });

    const handleDrag = (e, ui) => {
        console.log('Handle Drag Event: ', e);
        let tempDrag = {...drag}
        const {x, y} = tempDrag.deltaPosition;
        setDrag({
          deltaPosition: {
            x: x + ui.deltaX,
            y: y + ui.deltaY,
          }
        });
      };

    const  handleStart = (e) => {
        console.log('Handle Start Event: ', e);
        setDrag({activeDrags: ++drag.activeDrags});
      };

    const  handleStop = (e) => {
        console.log('Handle Stop Event: ', e);
        setDrag({activeDrags: --drag.activeDrags});
        };

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
            {/* <Iframe 
            url="https://im-a-puzzle.com/share/da17b7528a15c31?embed=true&showAds=false&showNav=false&showSolve=false"
            width="100%"
            height="100%"
            id=""
            className=""
            display="block"
            position="relative"
            /> */}
            <div className="home-picture">
                <div className="box">
                    <Draggable 
                    onStart={handleStart} 
                    onStop={handleStop}
                    defaultPosition={{x: 0, y: 0}}
                    border="parent">
                    <div className="handle1" style={{position: 'relative'}}>1</div>
                    </Draggable>
                </div>

                <div>
                    <Draggable 
                    onStart={handleStart} 
                    onStop={handleStop}
                    defaultPosition={{x: 0, y: 0}}
                    grid={[25, 25]}>
                    <div className="handle">2</div>
                    </Draggable>
                </div>
                
                <div>
                    <Draggable 
                    onStart={handleStart} 
                    onStop={handleStop}
                    grid={[25, 25]}>
                    <div className="handle">3</div>
                    </Draggable>
                </div>

                <div>
                    <Draggable 
                    onStart={handleStart} 
                    onStop={handleStop}
                    grid={[25, 25]}>
                    <div className="handle">4</div>
                    </Draggable>
                </div>

                <div>
                    <Draggable 
                    onStart={handleStart} 
                    onStop={handleStop}
                    grid={[25, 25]}>
                    <div className="handle">5</div>
                    </Draggable>
                </div>

                <div>
                    <Draggable 
                    onStart={handleStart} 
                    onStop={handleStop}
                    grid={[25, 25]}>
                    <div className="handle">6</div>
                    </Draggable>
                </div>

                <div>
                    <Draggable 
                    onStart={handleStart} 
                    onStop={handleStop}
                    grid={[25, 25]}>
                    <div className="handle">7</div>
                    </Draggable>
                </div>

                <div>
                    <Draggable 
                    onStart={handleStart} 
                    onStop={handleStop}
                    grid={[25, 25]}>
                    <div className="handle">8</div>
                    </Draggable>
                </div>

                <div>
                    <Draggable 
                    onStart={handleStart} 
                    onStop={handleStop}
                    grid={[25, 25]}>
                    <div className="handle">9
                    </div>
                    </Draggable>
                </div>


            </div>               
        </div>
    </div></>
);
}

export default Home;
