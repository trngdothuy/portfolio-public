import React, { useState, useEffect } from "react";
import AboutMeBody from "./AboutMeBody.js";

function Home() {
    const skills = ["html/css","javascript","react.js","node.js", "express","mongodb","react-native","git","ui/ux basics","python", "rust"];

    const [personalInfoPressed, setPersonalInfoPressed] = useState(false);
    const [skillsPressed, setSkillsPressed] = useState(false);
    const [contactPressed, setContactPressed] = useState(false);
    const [bioPressed, setBioPressed] = useState(true)

    function handlePersonalInfoClick (e) {
        if (personalInfoPressed === false) {
            setPersonalInfoPressed(true)
            // console.log('personal info pressed')
        } else {
            setPersonalInfoPressed(false)
            // console.log('personal info closed')
        }
    };

    function handleBioClick (e) {
            setBioPressed(true)
            console.log('bio clicked pressed')
    };

    function handleCvClick (e) {
        setBioPressed(false)
        console.log('cv clicked pressed')
};

    function handleSkillClick (e) {
        if (skillsPressed === false) {
            setSkillsPressed(true)
            // console.log('skills pressed')
        } else {
            setSkillsPressed(false)
            // console.log('skills closed')
        }
    };

    function handleContactClick (e) {
        if (contactPressed === false) {
            setContactPressed(true)
            // console.log('contact pressed')
        } else {
            setContactPressed(false)
            // console.log('contact closed')
        }
    };


return (
    <>
    <div className="full-block">
        <div className="block-1">
            <div className="icon-column"> 
            {/* bright when hovering */}
                <div className="icon-extend-side-bar">
                    <div className="icon-img">
                        <img className="icon-noti-img" src="https://res.cloudinary.com/dm63jyidg/image/upload/v1672359923/portfolio/x8zzktsyjxzhzpkp25un.png" alt="noti-icon"/>
                    </div>
                </div>
                <div className="icon-extend-side-bar">
                    
                    <div className="icon-img2"></div>
                </div>
                <div className="icon-extend-side-bar">
                    <div className="icon-img3">
                    <img className="icon-noti-img" src="https://res.cloudinary.com/dm63jyidg/image/upload/v1672359923/portfolio/x8zzktsyjxzhzpkp25un.png" alt="noti-icon"/></div>
                </div>
            </div>

            {/* personal info side bar section */}
            <div className="personal-info-column">
                <div className="box-white-text">
                {personalInfoPressed ? (
                    <button 
                    className="side-bar-btn"
                    onClick={handlePersonalInfoClick}>&#9660; my-info</button>
                ) : (
                    <button 
                    className="side-bar-btn"
                    onClick={handlePersonalInfoClick}>&#9654; my-info</button>
                )} 
                </div>
                {personalInfoPressed && <div className="box-white-text-hidden">
                    <div className="skill-extend-side-bar">
                        {/* pressable, change symbols, change color of text */}
                        <button 
                        className="skill-extend-side-bar-btn"
                        onClick={handleBioClick}>&gt; pers-info</button>
                    </div>
                    <div className="skill-extend-side-bar">
                        <button 
                        className="skill-extend-side-bar-btn"
                        onClick={handleCvClick}> &gt; cv</button>
                    </div>
                </div>}

                {/* skills side bar section */}
                <div className="box-white-text">
                {skillsPressed ? (
                    <button 
                    className="side-bar-btn"
                    onClick={handleSkillClick}>&#9660; skills</button>
                ) : (
                    <button 
                    className="side-bar-btn"
                    onClick={handleSkillClick}>&#9654; skills</button>
                )} 
                </div>

                {skillsPressed && <div className="box-white-text-long">
                    <div>
                        {skills.map((skill, i) => {
                            return <div className="skill-extend-side-bar" key={i}>&gt;  {skill}</div>
                        })}
                    </div>
                </div>}

                {/* contacts side bar section */}
                <div className="box-white-text">
                {contactPressed ? (
                    <button 
                    className="side-bar-btn"
                    onClick={handleContactClick}>&#9660; contacts</button>
                ) : (
                    <button 
                    className="side-bar-btn"
                    onClick={handleContactClick}>&#9654; contacts</button>
                )} 
                </div>

                <div className="box-white-text-long">
                {contactPressed && 
                    <div>
                    <a className="skill-extend-side-bar" href = "mailto: trng.dt1@gmail.com" target="_blank" rel="noreferrer">trng.dt1@gmail.com</a>
                    </div>}
                </div>
                
            </div>
        </div>


        <AboutMeBody bioPressed={bioPressed} handleCvClick={handleCvClick} setBioPressed={setBioPressed} handleBioClick={handleBioClick}/>
    </div></>
);
}

export default Home;


