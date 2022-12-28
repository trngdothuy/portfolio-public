import React, { useState, useEffect } from "react";
import {useLocation, useNavigate} from 'react-router-dom'

// import "./styles.css";

function Home() {

    let projects = [
        {name: 'vina-t&t',
        id: 1, 
        skills: "html/css, javascript, react.js, node.js, express, mongodb, git,ui/ux basics, postman", 
        photo: 'https://res.cloudinary.com/dm63jyidg/image/upload/v1672190592/portfolio/gbriqtc45bugvfszqgt0.jpg', 
        description: 'This is a e-commerce site allowing users to trace origin and observe life of fruits.', 
        result: 'https://projects.barcelonacodeschool.com/vinatt', 
        code: ''}, 
        {name: 'to-do-app', 
        id: 2, 
        skills: "html/css, javascript, react.js, node.js, react-native, git, ui/ux basics", 
        photo: 'https://res.cloudinary.com/dm63jyidg/image/upload/v1672190592/portfolio/yuwtyn6yg0oai7tylpbi.jpg', 
        description: 'This is an app to record and remind people what they have to do!', 
        result: '', 
        code: ''},
        {name: 'learning-app', 
        id: 3, 
        skills: "html/css, javascript, react.js, node.js, express, mongodb,react-native, git, ui/ux basics,google cloud vision api, cloudinary", 
        photo: 'https://res.cloudinary.com/dm63jyidg/image/upload/v1672190593/portfolio/gfnpa4eevfw3t7nnc8dh.jpg', 
        description: 'This is an app to read, listen, and learn.', 
        result: '', 
        code: ''}];
    

    const skills = ["html/css","javascript","react.js","node.js", "express","mongodb","react-native","git","ui/ux basics","python", "rust","postman", "google cloud vision api","cloudinary"];

    const [projectsPressed, setProjectsPressed] = useState(true);
    const [skillChosen, setSkillChosen] = useState([]);
    const [checkboxActive, setCheckboxActive] = useState(false);
    const [prjSelected, setprjSelected] = useState();

    function handleProjectsClick (e) {
        if (projectsPressed === false) {
            setProjectsPressed(true)
            // console.log('personal info pressed')
        } else {
            setProjectsPressed(false)
            // console.log('personal info closed')
        }
    };

    function handleChangeCheckBox (e) {
        // console.log('check box changed', e.target.checked)
        setCheckboxActive(e.target.checked)
        // when checkbox is ticked 
        if (e.target.checked === true) {
            let temp = [...skillChosen]
            temp.push(e.target.id)
            // console.log('skills chosen', temp)
            setSkillChosen(temp)
        } else {
            let temp = [...skillChosen]
            let index = temp.findIndex(ele => ele === e.target.id)
            // console.log('index', index)
            temp.splice(index, 1)
            // console.log('skills chosen', temp)
            setSkillChosen(temp)
        }
        projectDisplay(e.target.id)
    };

    function projectDisplay (x) {
        let prjChosen = projects.filter(prj => prj.skills.includes(x))
        console.log('prj chosen', prjChosen)
        setprjSelected(prjChosen)
    }

return ( 
    <>
    <div className="full-block">
        <div className="block-1">
            <div className="projects-1st-column">
                <div className="box-white-text">
                    {projectsPressed ? (
                        <button 
                        className="side-bar-btn"
                        onClick={handleProjectsClick}>&#9660; projects</button>
                    ) : (
                        <button 
                        className="side-bar-btn"
                        onClick={handleProjectsClick}>&#9654; projects</button>
                    )}
                </div>
                {projectsPressed && <div className="box-white-text-long-contact">
                    {skills.map((skill, i) => {
                        return <div className="filter-box" key={i}>
                                <input type="checkbox" onChange={handleChangeCheckBox} id={skill} name={skill} value={skill} />
                                <label for={skill}>{skill}</label>
                            </div>
                    })}
                </div>}
            </div>
        </div>

        <div className="block-2-prj">
            <div className="first-row-body">
                <div className="box-first-row">
                    <span>my-projects</span> 
                    {/* name of skills when sort */}
                    <span>x</span>
                </div>
            </div>
            {checkboxActive 
            ? <div className="main-body-prj">
                {
                prjSelected.map((prj, i) => {
                return (
                    <div key={i} className="prj-card">
                            <p><span>project {prj.id} </span>
                            <span>// _{prj.name}</span></p> 
                            <div className="prj-photo-box">
                                <img className="img-grid" alt='projectImage' src={prj.photo} />
                                <p className="prj-description">{prj.description}</p>
                                <div className="button-row">
                                    <a className="button" href={prj.result}>view-project</a>
                                    <a className="button" href="/">view-code</a>
                                </div>
                            </div>
                    </div>) })}
            </div>
            : <div className="main-body-prj">
                {
                projects.map((prj, i) => {
                return (
                    <div key={i} className="prj-card">
                            <p><span>project {prj.id} </span>
                            <span>// _{prj.name}</span></p> 
                            <div className="prj-photo-box">
                                <img className="img-grid" alt='projectImage' src={prj.photo} />
                                <p className="prj-description">{prj.description}</p>
                                <div className="button-row">
                                    <a className="button" href={prj.result}>view-project</a>
                                    <a className="button" href="/">view-code</a>
                                </div>
                            </div>
                    </div>) })}
                </div>}
            
        </div>
    </div></>
);
}

export default Home;
