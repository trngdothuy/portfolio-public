import React, { useState, useEffect, useRef } from "react";
// import Iframe from 'react-iframe'
import {useLocation, useNavigate} from 'react-router-dom';
import ReactDOM from 'react-dom';


import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time

// import "./styles.css";

function Home() {

    const navigate = useNavigate();

    const [done, setDone] = useState(false)
    const [notStart, setNotStart] = useState(true)

    function game() {
        if (notStart & !done) {
            // start screen
            return <>
        <div className="home-picture-before-drag">
                {/* <p>hello</p> */}
                <div className="home-picture-before-drag-pic"></div>
                <div class="home-picture-after-drag-text">
                    <h1 className="pink-text" style={{backgroundColor:'transparent',fontSize:'1.9em', width:'400px'}}>Drag & Done Game</h1>
                    <div className="purple-text-in-game">
                    <h3 className="purple-text" style={{backgroundColor:'transparent',fontSize:'1em', width:'400px'}}>Let's help the pictures find their right positions by dragging them.</h3>
                    <button className="big-button" type= "button" onClick={()=>setNotStart(false)}>Let's play</button>
                    </div>
                </div>
            </div>
        </>
        } else if (!notStart & !done) {
            // playing screen
            return <>
            <div className="home-picture" >
            {
                pics &&
                pics.map((pic, index) => (
                <div className="handle1" style={{position: 'relative',
                background: `url(${pic.url})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}
                    onDragStart={(e) => dragStart(e, index)}
                    onDragEnter={(e) => dragEnter(e, index)}
                    onDragEnd={drop}
                    key={index}
                    draggable>
                    {/* {pic.url} */}
                </div>
                ))}
            </div>
        </>
        } else {
            // game done
            return <>
        <div className="home-picture-after-drag">
                {/* <p>hello</p> */}
                <div className="home-picture-after-drag-pic"></div>
                <div class="home-picture-after-drag-text">
                    <h2 className="orange-text" style={{backgroundColor:'transparent',fontSize:'1.5em', width:'300px',textShadow: '1px 1px yellow'}}>Congrats, You won!</h2>
                    <h1 className="pink-text" style={{backgroundColor:'transparent',fontSize:'2em', width:'300px',textShadow: '1px 1px white'}}>I am Trang Do</h1>
                    <h3 className="comment-text" style={{backgroundColor:'transparent',fontSize:'1.2em', width:'300px', textShadow: '1px 1px #0de861'}}>and I'm a Programmer</h3>
                    <button className="big-button" type= "button" onClick={()=>navigate('/about-me')}>See more</button>
                </div>
            </div>
        </>
        }
    }

    const [pics, setPics] = useState([{url: 'https://res.cloudinary.com/dm63jyidg/image/upload/c_scale,w_150/v1672540838/portfolio/rt9g5nhusgnzecab0mtp.jpg'}, 
    {url: 'https://res.cloudinary.com/dm63jyidg/image/upload/c_scale,w_150/v1672540840/portfolio/scmfokk7rnn1rsb2wrxs.jpg'}, 
    {url: 'https://res.cloudinary.com/dm63jyidg/image/upload/c_scale,w_150/v1672540839/portfolio/xieu9a6e7pk89ec3qyqi.jpg'}, 
    {url: 'https://res.cloudinary.com/dm63jyidg/image/upload/c_scale,w_150/v1672540838/portfolio/f0x3qic5jugrwnzti3jv.jpg'}, 
    {url: 'https://res.cloudinary.com/dm63jyidg/image/upload/c_scale,w_150/v1672540838/portfolio/jp55qi05mwrs3zfmhtea.jpg'}, 
    {url: 'https://res.cloudinary.com/dm63jyidg/image/upload/c_scale,w_150/v1672540838/portfolio/xqb9cdkpmykceya22ejm.jpg'}, 
    {url: 'https://res.cloudinary.com/dm63jyidg/image/upload/c_scale,w_150/v1672540839/portfolio/pajxdrdvrwquk7lj5w6z.jpg'}, 
    {url: 'https://res.cloudinary.com/dm63jyidg/image/upload/c_scale,w_150/v1672540839/portfolio/sz4ryajjuqh1qjxd81yd.jpg'}, 
    {url: 'https://res.cloudinary.com/dm63jyidg/image/upload/c_scale,w_150/v1672540838/portfolio/fern6mlmjjwor9tmkkcd.jpg'}]);

    const dragItem = useRef();
    const dragOverItem = useRef();
    
    const dragStart = (e, position) => {
        dragItem.current = position;
        // console.log('dragStart', e.target.innerHTML);
        // console.log('dragStart position', position);
    };
    
    const dragEnter = (e, position) => {
        dragOverItem.current = position;
        // console.log('dragEnter', e.target.innerHTML);
    };

    const drop = (e) => {
        // change position 
        const copyListItems = [...pics];
        const dragItemContent = copyListItems[dragItem.current];
        copyListItems.splice(dragItem.current, 1);
        copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        console.log('pics list', copyListItems);
        setPics(copyListItems);
      };

    useEffect( () => {
        // the right positions
        let list = [{url: 'https://res.cloudinary.com/dm63jyidg/image/upload/c_scale,w_150/v1672540838/portfolio/fern6mlmjjwor9tmkkcd.jpg'}, 
        {url: 'https://res.cloudinary.com/dm63jyidg/image/upload/c_scale,w_150/v1672540838/portfolio/rt9g5nhusgnzecab0mtp.jpg'}, 
        {url: 'https://res.cloudinary.com/dm63jyidg/image/upload/c_scale,w_150/v1672540838/portfolio/jp55qi05mwrs3zfmhtea.jpg'}, 
        {url: 'https://res.cloudinary.com/dm63jyidg/image/upload/c_scale,w_150/v1672540838/portfolio/f0x3qic5jugrwnzti3jv.jpg'}, 
        {url: 'https://res.cloudinary.com/dm63jyidg/image/upload/c_scale,w_150/v1672540840/portfolio/scmfokk7rnn1rsb2wrxs.jpg'}, 
        {url: 'https://res.cloudinary.com/dm63jyidg/image/upload/c_scale,w_150/v1672540838/portfolio/xqb9cdkpmykceya22ejm.jpg'}, 
        {url: 'https://res.cloudinary.com/dm63jyidg/image/upload/c_scale,w_150/v1672540839/portfolio/xieu9a6e7pk89ec3qyqi.jpg'}, 
        {url: 'https://res.cloudinary.com/dm63jyidg/image/upload/c_scale,w_150/v1672540839/portfolio/sz4ryajjuqh1qjxd81yd.jpg'}, 
        {url: 'https://res.cloudinary.com/dm63jyidg/image/upload/c_scale,w_150/v1672540839/portfolio/pajxdrdvrwquk7lj5w6z.jpg'}];
        console.log('list', list)
        let temp = [...pics]
        console.log('temp', temp)
        if (JSON.stringify(temp) === JSON.stringify(list)) {
            setDone(true)
            // setVisibility('hidden')
            console.log('done')
        } else {
            console.log('not done yet')
        }
      }, [pics]);

return (
    <>
    <div className="full-block-home">
        {/* <div className="block-1"></div> */}
        <div className="home-1st-block">
            <>
            {/* <div className="intro-box"></div> */}
            <div className="intro-box-text">
                <h5 style={{backgroundColor:'transparent'}}>Hi all, I am</h5>
                <h1 className="pink-text" style={{backgroundColor:'transparent'}}>Trang Do Thuy</h1>
                <h3 className="blue-text" style={{backgroundColor:'transparent'}}>&gt; Full-Stack Developer</h3>
                <br/>
                <h6 className="purple-text" style={{backgroundColor:'transparent'}}> &#47;&#47; 	&nbsp;complete the game to continue</h6>
                <h6 className="purple-text" style={{backgroundColor:'transparent'}}> &#47;&#47; 	&nbsp;please use PC or laptop to see the game</h6>
                <h6 className="purple-text" style={{backgroundColor:'transparent'}}> &#47;&#47; 	&nbsp;you can also see it on my Github page</h6>
                <h6 style={{backgroundColor:'transparent'}}> <span  className="orange-text" style={{backgroundColor:'transparent'}}>const</span> <span className="green-text" style={{backgroundColor:'transparent'}}>githubLink</span> <span className="white-text" style={{backgroundColor:'transparent'}}>=</span> <span className="yellow-text" style={{backgroundColor:'transparent'}}>"https://github.com/trngdothuy"</span></h6>
                <div className="button-mobile">
                <button className="big-button" type= "button" onClick={()=>navigate('/about-me')}>see-more</button>
                </div>
            </div>
            </>
        </div>

        <div class="home-2nd-block">
            {game()}
        </div>
    </div></>
);
}

export default Home;
