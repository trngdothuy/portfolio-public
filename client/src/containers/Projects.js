import React, { useState, useEffect } from "react";
import {useLocation, useNavigate} from 'react-router-dom'

// import "./styles.css";

function Home() {

    let n = 2
    let projects = [
        {name: 'vina-t&t',
        id: n-1, 
        skills: "html/css, javascript, react.js, node.js, express, mongodb, git, ui/ux basics, postman, nodemailer", 
        photo: 'https://res.cloudinary.com/dm63jyidg/image/upload/v1672190592/portfolio/gbriqtc45bugvfszqgt0.jpg', 
        description: '> an e-commerce site allowing users to trace origin and observe life of fruits.', 
        result: 'https://projects.barcelonacodeschool.com/vinatt', 
        code: 'https://github.com/trngdothuy/vina-t-t-web-application'}, 
        {name: 'to-do-app', 
        id: n++, 
        skills: "html/css, javascript, react.js, node.js, react-native, git, ui/ux basics", 
        photo: 'https://res.cloudinary.com/dm63jyidg/image/upload/v1672190592/portfolio/yuwtyn6yg0oai7tylpbi.jpg', 
        description: '> an app to record and remind users what they have to do.', 
        result: '', 
        code: 'https://github.com/trngdothuy/todos-app-project'},
        {name: 'learning-app', 
        id: n++, 
        skills: "html/css, javascript, react.js, node.js, express, mongodb,react-native, git, ui/ux basics,google cloud vision api, cloudinary", 
        photo: 'https://res.cloudinary.com/dm63jyidg/image/upload/v1672190593/portfolio/gfnpa4eevfw3t7nnc8dh.jpg', 
        description: '> an app to read, listen, save, and learn.', 
        result: '', 
        code: 'https://github.com/trngdothuy/learning-app'},
        {name: 'my-portfolio', 
        id: n++, 
        skills: "html/css, javascript, react.js, node.js, express, git, ui/ux basics, nodemailer", 
        photo: 'http://res.cloudinary.com/dm63jyidg/image/upload/v1672639071/portfolio/g3vzsmftv7yse7kfbjp8.png', 
        description: '> my portfolio page.', 
        result: 'http://trangdothuy.surge.sh', 
        code: 'https://github.com/trngdothuy/portfolio'},
        {name: 'javascr-excs', 
        id: n++, 
        skills: "javascript", 
        photo: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png', 
        description: '> my Javascript practices at Barcelona Code School Bootcamp.', 
        result: '', 
        code: ''},
        {name: 'react-excs', 
        id: n++, 
        skills: "html/css, javascript, react.js, git", 
        photo: 'https://cdn.worldvectorlogo.com/logos/react-1.svg', 
        description: '> my React exercises at Barcelona Code School Bootcamp.', 
        result: '', 
        code: ''},
        {name: 'express-excs', 
        id: n++, 
        skills: "html/css, javascript, react.js, express, postman, git, mongodb, node.js", 
        photo: 'https://softprodigy.com/wp-content/uploads/2019/07/express-js.png', 
        description: '> my React Express (MERN) exercises at Barcelona Code School Bootcamp.', 
        result: '', 
        code: ''},
        {name: 'python-excs', 
        id: n++, 
        skills: "python, git", 
        photo: 'https://www.armadilloamarillo.com/wp-content/uploads/Python-Symbol.png', 
        description: "> my Python exercises while self-studying.", 
        result: '', 
        code: 'https://github.com/trngdothuy/python-exercises'},
        {name: 'rust-excs', 
        id: n++, 
        skills: "rust, git", 
        photo: 'http://rust-lang.org/logos/rust-logo-256x256.png', 
        description: '> my Rust exercises while self-studying.', 
        result: '', 
        code: 'https://github.com/trngdothuy/rust-exercises'},
        {name: 'trello-clone', 
        id: n++, 
        skills: "html/css, git", 
        photo: 'https://res.cloudinary.com/dm63jyidg/image/upload/v1672638549/portfolio/ut8tdvqxzan3czncbquk.png', 
        description: '> a clone of Trello Dashboard created using solely HTML/CSS.',
        result: 'http://trello.dtt.surge.sh/', 
        code: 'https://github.com/trngdothuy/Trello-dashboard'},
        {name: 'hola-bcn', 
        id: n++, 
        skills: "html/css, git", 
        photo: 'https://res.cloudinary.com/dm63jyidg/image/upload/v1672640920/portfolio/dgo0dj9epwr6wmn72ec8.png', 
        description: '> a responsive multiple-page site created using solely HTML/CSS.',
        result: 'http://holabcn.dtt.surge.sh/', 
        code: 'https://github.com/trngdothuy/my-website.git'}];
    

        

    const skills = ["html/css","javascript","react.js","node.js", "express","mongodb","react-native","git","ui/ux basics","python", "rust","postman", "google cloud vision api","cloudinary", "nodemailer"];

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
                {projectsPressed ? (<div className="box-white-text-long-contact">
                    {skills.map((skill, i) => {
                        return <div className="filter-box" key={i}>
                                <input type="checkbox" onChange={handleChangeCheckBox} id={skill} name={skill} value={skill} />
                                <label for={skill}>{skill}</label>
                            </div>
                    })}
                </div>) : (<div className="box-white-text-long-contact"></div>)}
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
                                    <a className="button" href={prj.code}>view-code</a>
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
                                    <a className="button" href={prj.code}>view-code</a>
                                </div>
                            </div>
                    </div>) })}
                </div>}
            
        </div>
    </div></>
);
}

export default Home;
