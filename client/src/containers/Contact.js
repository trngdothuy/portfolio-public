import React, { useState, useEffect } from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import axios from "axios";
import ContactScreen1 from "./ContactScreen1.js";

// import "./styles.css";

function Contact() {

const [name, setName] = useState();
const [email, setEmail] = useState();
const [message, setMessage] = useState();
const [subject, setSubject] = useState();
const [date, setDate] = useState();
const [sent, setSent] = useState(false)

let i = 1;

const [contactPressed, setContactPressed] = useState(false);
const [findMePressed, setFindMePressed] = useState(false);


function findDate () {
    let today = new Date()
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    console.log('today', today)
    setDate(today)
};


useEffect(
    () => {
        findDate() 
    }, [] );


    function handleContactClick (e) {
        if (contactPressed === false) {
            setContactPressed(true)
            // console.log('personal info pressed')
        } else {
            setContactPressed(false)
            // console.log('personal info closed')
        }
    };

    function handleFindMeClick (e) {
        if (findMePressed === false) {
            setFindMePressed(true)
            // console.log('personal info pressed')
        } else {
            setFindMePressed(false)
            // console.log('personal info closed')
        }
    };

return (
    <>
    <div className="full-block">
        <div class="block-1">
            <div className="projects-1st-column">
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

                {contactPressed && <div className="box-white-text">
                    <a className="skill-extend-side-bar" href = "mailto: trng.dt1@gmail.com">&#62; trng.dt1@gmail.com</a>
                </div>
                }

                <div className="box-white-text">
                    {findMePressed ? (
                        <button 
                        className="side-bar-btn"
                        onClick={handleFindMeClick}>&#9660; find-me-also-in</button>
                    ) : (
                        <button 
                        className="side-bar-btn"
                        onClick={handleFindMeClick}>&#9654; find-me-also-in</button>
                    )} 
                </div>

                <div className="box-white-text-long-contact">
                    {findMePressed && <div>
                    <a className="skill-extend-side-bar" href="https://www.linkedin.com/in/trang-do-thuy-183435141/">
                    &#62;
                    linkedin
                    </a>
                    </div>}
                </div>
            </div>
        </div>

        <ContactScreen1 name={name} setName={setName} email={email} setEmail={setEmail} message={message} setMessage={setMessage} subject={subject} setSubject={setSubject} sent={sent} setSent={setSent}/>
            

        <div class="block-3-abtme">
            <div className="first-row-body">
                <div className="box-first-row">
                    <span>here-to-preview</span> 
                    <span>x</span>
                </div>
            </div>
            <div className="main-body-contact-2">
                <table>
                    <tr>
                        <td className="number-column">{i}</td>
                        <td className="text-column"><span className="pink-text">const</span> <span className="blue-text">button</span> <span className="pink-text">=</span> </td>
                    </tr>
                    <tr>
                        <td className="number-column">{i++}</td>
                        <td className="text-column">&#160;<span className="purple-text">document.querySelection</span><span className="green-text">('#sendBtn')</span><span className="pink-text">;</span></td>
                    </tr>
                    <tr>
                        <td className="number-column">{i++}</td>
                        <td className="text-column"></td>
                    </tr>
                    <tr>
                        <td className="number-column">{i++}</td>
                        <td className="text-column"><span className="pink-text">const</span> <span className="blue-text">messageToTrang</span> <span className="pink-text">= </span><span className="purple-text">&#123;</span></td>
                    </tr>
                    <tr>
                        <td className="number-column">{i++}</td>
                        <td className="text-column">	&#160;<span className="yellow-text">name: </span> <span className="orange-text">&#34; {name} &#34;</span></td>
                    </tr>
                    <tr>
                        <td className="number-column">{i++}</td>
                        <td className="text-column">	&#160;<span className="yellow-text">email: </span><span className="orange-text">&#34;{email} &#34;</span></td>
                    </tr>
                    <tr>
                        <td className="number-column">{i++}</td>
                        <td className="text-column">	&#160;<span className="yellow-text">subject: </span><span className="orange-text">&#34;{subject} &#34;</span></td>
                    </tr>
                    <tr>
                        <td className="number-column">{i++}</td>
                        <td className="text-column">	&#160;<span className="yellow-text">message: </span><span className="orange-text">&#34;{message} &#34;</span></td>
                    </tr>
                    <tr>
                        <td className="number-column">{i++}</td>
                        <td className="text-column">&#160;<span className="yellow-text">date:</span> <span className="orange-text">&#34; {date} &#34;</span></td>
                    </tr>
                    <tr>
                        <td className="number-column">{i++}</td>
                        <td className="text-column"><span className="purple-text">&#125;</span></td>
                    </tr>
                    <tr>
                        <td className="number-column">{i++}</td>
                        <td className="text-column"></td>
                    </tr>
                    <tr> 
                        <td className="number-column">{i++}</td>
                        <td className="text-column"><span className="blue-text">button</span><span className="purple-text">.addEventListener</span><span className="pink-text">&#40;&#39;click&#39;,&#160;&#40; &#41;&#160; &#61;&#62; </span><span className="purple-text">&#123;</span>
 </td>
                    </tr>
                    <tr>
                        <td className="number-column">{i++}</td>
                        <td className="text-column">&#160;<span className="green-text">form</span><span className="purple-text">.send</span><span className="blue-text">(messageToTrang);</span></td>
                    </tr>
                    <tr>
                        <td className="number-column">{i++}</td>
                        <td className="text-column"><span className="purple-text">&#125;</span><span className="pink-text">&#41;</span></td>
                    </tr>
                </table>
            </div>
        </div>
    </div></>
);
}

export default Contact;
