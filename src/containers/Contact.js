import React, { useState, useEffect } from "react";
import {useLocation, useNavigate} from 'react-router-dom';
// import axios from "axios";

// import "./styles.css";

function Home() {

const [name, setName] = useState()
const [email, setEmail] = useState()
const [message, setMessage] = useState()
const [date, setDate] = useState()



function findDate () {
    let today = new Date()
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    console.log('today', today)
    setDate(today)
}


useEffect(
    () => {
        findDate() 
    }, [] );



function handleSubmit(event) {
    console.log('submit clicked')
    // event.preventDefault();
    // const firstNameInput = event.target.elements.firstname;
    // const lastNameInput = event.target.elements.lastname;
    // const emailInput = event.target.elements.email;
    // const phoneInput = event.target.elements.phone;
    // const addressInput = event.target.elements.address;
    // const subjectInput = event.target.elements.subject;
    // const messageInput = event.target.elements.message;

    // var data = { firstname: firstNameInput.value, lastname: lastNameInput.value, email: emailInput.value, phone: phoneInput.value, address: addressInput.value, message: messageInput.value, subject: subjectInput.value };
    // // console.log("--data--", name: event.target.elements.name.value, event.target.elements.email.value, event.target.elements.message.value)

    // // sending request to localhost, in production could be just /sendEmail
    // const sendEmail = async email => {
    //     const res = await axios
    //         .post('http://localhost:3040/emails/send_email', data)
    //         .catch(function (error) {
    //         console.log(error);
    //         });
    //         console.log("res: ", res)
    //         firstNameInput.value = '';
    //         lastNameInput.value = '';
    //         phoneInput.value = '';
    //         addressInput.value = '';
    //         subjectInput.value = '';
    //         emailInput.value = '';
    //         subjectInput.value ='';
    //         messageInput.value = '';
    //         alert('Your message has been sent, thanks!');
    //         console.log('--SeNd!--');
    //     };
    // sendEmail()

    }

    const handleChangeName = (e) => {
        // debugger
    setName(e.target.value);
    // console.log("this is name" + e.target.value)
    };

    const handleChangeEmail = (e) => {
        // debugger
    setEmail(e.target.value);
    // console.log("this is email" + e.target.value)
    };

    const handleChangeMessage = (e) => {
        // debugger
    setMessage(e.target.value);
    // console.log("this is message" + e.target.value)
    };

return (
    <>
    <div className="full-block">
        <div class="block-1">
            <div className="projects-1st-column">
                <div className="box-white-text">
                    &#9660; contacts
                </div>
                <div className="box-white-text">
                    <div className="comment-text">
                    trng.dt1@gmail.com
                    </div>
                </div>
                <div className="box-white-text">
                    &#9660; find-me-also-in
                </div>
                <div className="box-white-text-long-contact">
                    <div>
                    <a className="comment-text" href="https://www.linkedin.com/in/trang-do-thuy-183435141/">linkedln</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="block-2-abtme">
            <div className="first-row-body">
                <div className="box-first-row">
                    <span>contacts</span> 
                    <span>x</span>
                </div>
            </div>
            <div className="main-body-contact">
                <form onSubmit={handleSubmit} className="contact-form">
                    <label className="yellow-text" for="name">_name:</label>
                    <input 
                        required={true} 
                        onChange={handleChangeName} 
                        type="text" 
                        className="contact-input" 
                        name="name" 
                        placeholder="Hannah Montana"/>
                    <label className="yellow-text" for="email">_email:</label>
                    <input 
                        required={true} 
                        onChange={handleChangeEmail} 
                        type="email" 
                        className="contact-input" 
                        name="email"
                        placeholder="hannah_montana@gmail.com"/>
                    <label className="yellow-text" for="message">_message:</label>
                    <textarea 
                        required={true} 
                        onChange={handleChangeMessage} 
                        type="text" 
                        className="contact-input2" 
                        name="message"
                        placeholder="Type your message here.."/>
                    <div className="button-section">
                    <button className="submit-button">submit-message</button></div>
                </form>
            </div>
        </div>

        <div class="block-3-abtme">
            <div className="first-row-body">
                <div className="box-first-row">
                    <span>skills</span> 
                    <span>x</span>
                </div>
            </div>
            <div className="main-body-contact-2">
                <table>
                    <tr>
                        <td className="number-column">1</td>
                        <td className="text-column"><span className="pink-text">const</span> <span className="blue-text">button</span> <span className="pink-text">=</span> </td>
                    </tr>
                    <tr>
                        <td className="number-column">2</td>
                        <td className="text-column">&#160;<span className="purple-text">document.querySelection</span><span className="green-text">('#sendBtn')</span><span className="pink-text">;</span></td>
                    </tr>
                    <tr>
                        <td className="number-column">3</td>
                        <td className="text-column"></td>
                    </tr>
                    <tr>
                        <td className="number-column">4</td>
                        <td className="text-column"><span className="pink-text">const</span> <span className="blue-text">message</span> <span className="pink-text">= </span><span className="purple-text">&#123;</span></td>
                    </tr>
                    <tr>
                        <td className="number-column">5</td>
                        <td className="text-column">	&#160;<span className="yellow-text">name: </span> <span className="orange-text">&#34; {name} &#34;</span></td>
                    </tr>
                    <tr>
                        <td className="number-column">6</td>
                        <td className="text-column">	&#160;<span className="yellow-text">email: </span><span className="orange-text">&#34;{email} &#34;</span></td>
                    </tr>
                    <tr>
                        <td className="number-column">7</td>
                        <td className="text-column">	&#160;<span className="yellow-text">message: </span><span className="orange-text">&#34;{message} &#34;</span></td>
                    </tr>
                    <tr>
                        <td className="number-column">8</td>
                        <td className="text-column">&#160;<span className="yellow-text">date:</span> <span className="orange-text">&#34; {date} &#34;</span></td>
                    </tr>
                    <tr>
                        <td className="number-column">9</td>
                        <td className="text-column"><span className="purple-text">&#125;</span></td>
                    </tr>
                    <tr>
                        <td className="number-column">10</td>
                        <td className="text-column"></td>
                    </tr>
                    <tr> 
                        <td className="number-column">11</td>
                        <td className="text-column"><span className="blue-text">button</span><span className="purple-text">.addEventListener</span><span className="pink-text">&#40;&#39;click&#39;,&#160;&#40; &#41;&#160; &#61;&#62; </span><span className="purple-text">&#123;</span>
 </td>
                    </tr>
                    <tr>
                        <td className="number-column">12</td>
                        <td className="text-column">&#160;<span className="green-text">form</span><span className="purple-text">.send</span><span className="blue-text">(message);</span></td>
                    </tr>
                    <tr>
                        <td className="number-column">13</td>
                        <td className="text-column"><span className="purple-text">&#125;</span><span className="pink-text">&#41;</span></td>
                    </tr>
                </table>
            </div>
        </div>
    </div></>
);
}

export default Home;
