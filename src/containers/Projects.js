import React from 'react';
import {useLocation, useNavigate, useState} from 'react-router-dom'

// import "./styles.css";

function Home() {

let projects = [
    {name: 'vina-t&t', 
    skills: 'react', 
    photo: 'https://scontent.fbcn5-1.fna.fbcdn.net/v/t39.30808-6/320744842_3230828833914254_8439373815313572555_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=-aDLYY2r1I4AX8reUKo&_nc_ht=scontent.fbcn5-1.fna&oh=00_AfAIe-Px56XJTmuwerDQVj6g5dKTFPZ0Z570Qr4ue7TtgA&oe=63AA744A', 
    description: 'This is a e-commerce site allowing users to trace origin and observe life of fruits.', 
    result: 'https://projects.barcelonacodeschool.com/vinatt', 
    code: ''}, 
    {name: 'to-do-app', 
    skills: 'react native', 
    photo: 'https://scontent.fbcn5-1.fna.fbcdn.net/v/t39.30808-6/320739963_2008924939302684_4446330421088923033_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=N1cBDd8FtvwAX8mU33w&_nc_ht=scontent.fbcn5-1.fna&oh=00_AfDpPuQqoFM8j_3gzEmaCRoCoAbRYsZ2pxv9UJRw0_B2aA&oe=63AA4A94', 
    description: 'This is an app to record and remind people what they have to do!', 
    result: '', 
    code: ''},
    {name: 'learning-app', 
    skills: 'react native', 
    photo: 'https://scontent.fbcn5-2.fna.fbcdn.net/v/t39.30808-6/320675877_3299723376949960_5683993792672355688_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=khspv9N8Z5IAX-MxKuf&_nc_ht=scontent.fbcn5-2.fna&oh=00_AfBLL8ar6c7HrKPIm7ztoSbX3yshs2bWtIPMaNX4-lCGMg&oe=63A5027B', 
    description: 'This is an app to read, listen, and learn.', 
    result: '', 
    code: ''}]

return (
    <>
    <div className="full-block">
        <div className="block-1">
            <div className="projects-1st-column">
                <div className="box-white-text">
                    &#9660; projects
                </div>
                <div className="box-white-text-long-contact">
                <div>
                    <input type="checkbox" id="react" name="interest" value="react" />
                    <label for="react">react</label>
                </div>
                </div>
            </div>
        </div>

        <div className="block-2-prj">
            <div className="first-row-body">
                <div className="box-first-row">
                    <span>names of skills</span> 
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
