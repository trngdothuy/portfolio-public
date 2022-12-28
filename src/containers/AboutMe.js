import React, { useState, useEffect } from "react";
import AboutMeBody from "./AboutMeBody.js";

function Home() {
    const skills = ["html/css","javascript","react.js","node.js", "express","mongodb","react-native","git","ui/ux basics","python", "rust"];

    const [personalInfoPressed, setPersonalInfoPressed] = useState(false);
    const [skillsPressed, setSkillsPressed] = useState(false);
    const [contactPressed, setContactPressed] = useState(false);

    function handlePersonalInfoClick (e) {
        if (personalInfoPressed === false) {
            setPersonalInfoPressed(true)
            // console.log('personal info pressed')
        } else {
            setPersonalInfoPressed(false)
            // console.log('personal info closed')
        }
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
                <p className="comment-text">icon</p>
                <p className="comment-text">icon</p>
                <p className="comment-text">icon</p>
            </div>

            {/* personal info side bar section */}
            <div className="personal-info-column">
                <div className="box-white-text">
                {personalInfoPressed ? (
                    <button 
                    className="side-bar-btn"
                    onClick={handlePersonalInfoClick}>&#9660; personal-info</button>
                ) : (
                    <button 
                    className="side-bar-btn"
                    onClick={handlePersonalInfoClick}>&#9654; personal-info</button>
                )} 
                </div>
                {personalInfoPressed && <div className="box-white-text-hidden">
                    <div className="comment-text">
                        {/* pressable, change symbols, change color of text */}
                    &gt; bio
                    </div>
                    <div className="comment-text">
                    &gt; cv
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
                            return <div className="comment-text" key={i}>&gt;  {skill}</div>
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
                    <a className="comment-text" href = "mailto: trng.dt1@gmail.com">trng.dt1@gmail.com</a>
                    </div>}
                </div>
                
            </div>
        </div>


        <AboutMeBody/>
    </div></>
);
}

export default Home;


