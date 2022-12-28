import React, { useState, useEffect } from "react";
import {useLocation, useNavigate} from 'react-router-dom'

// import "./styles.css";

function Home() {

    const [checked, setChecked] = useState(false)

    let projects = [
        {name: 'vina-t&t', 
        skills: 'react', 
        photo: 'https://res.cloudinary.com/dm63jyidg/image/upload/v1672190592/portfolio/gbriqtc45bugvfszqgt0.jpg', 
        description: 'This is a e-commerce site allowing users to trace origin and observe life of fruits.', 
        result: 'https://projects.barcelonacodeschool.com/vinatt', 
        code: ''}, 
        {name: 'to-do-app', 
        skills: 'react native', 
        photo: 'https://res.cloudinary.com/dm63jyidg/image/upload/v1672190592/portfolio/yuwtyn6yg0oai7tylpbi.jpg', 
        description: 'This is an app to record and remind people what they have to do!', 
        result: '', 
        code: ''},
        {name: 'learning-app', 
        skills: 'react native', 
        photo: 'https://res.cloudinary.com/dm63jyidg/image/upload/v1672190593/portfolio/gfnpa4eevfw3t7nnc8dh.jpg', 
        description: 'This is an app to read, listen, and learn.', 
        result: '', 
        code: ''}];

    const skills = ["html/css","javascript","react.js","node.js", "express","mongodb","react-native","git","ui/ux basics","python", "rust"];

return (
    <>
    <div className="full-block">
        <div className="block-1">
            <div className="projects-1st-column">
                <div className="box-white-text">
                    &#9660; projects
                </div>
                <div className="box-white-text-long-contact">
                    {skills.map((skill, i) => {
                        return <div className="filter-box" key={i}>
                                <input type="checkbox" checked={checked} onChange={e => setChecked(e.target.checked)} id={skill} name={skill} value={skill} />
                                <label for={skill}>{skill}</label>
                            </div>
                    })}
                </div>
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
            <div className="main-body-prj">
                {
                projects.map((prj, i) => {
                return (
                    <div key={i} className="prj-card">
                            <p><span>project {i+1} </span>
                            <span>// _{prj.name}</span></p> 
                            <div className="prj-photo-box">
                                <img className="img-grid" alt='projectImage' src={prj.photo} />
                                <p className="prj-description">{prj.description}</p>
                                <div className="button-row">
                                    <a className="button" href={prj.result}>view-project</a>
                                    <a className="button" href="/">view-code</a>
                                </div>
                            </div>


                        {/* <div className="hidden">
                            <p>Price/kg: €{prj.price}</p>
                            <p>Quantity:  
                            <select className={prj.category} name={prj.price} id={prj.photo} onChange={}>
                                <option value="0">kg</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select></p>
                            
                            <button className="big-button" onClick={()=>handleClickCart(cate.category, cate.value, cate.price, cate.photo)}>Set quantity in cart</button>
                        </div> */}
                    </div>) })}
                </div>
        </div>
    </div></>
);
}

export default Home;
