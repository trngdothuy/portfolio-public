import React, { useState, useEffect } from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import axios from "axios";


function ContactScreen1({name, setName, email, setEmail, message, setMessage, subject, setSubject, sent, setSent}) {


let i = 1;
    
function handleSubmit(event) {
    console.log('submit clicked')
    event.preventDefault();
    const nameInput = event.target.elements.name;
    const emailInput = event.target.elements.email;
    const subjectInput = event.target.elements.subject;
    const messageInput = event.target.elements.message;

    var data = { name: nameInput.value, email: emailInput.value, message: messageInput.value, subject: subjectInput.value};
    // console.log("--data--", name: event.target.elements.name.value, event.target.elements.email.value, event.target.elements.message.value)

    // sending request to localhost, in production could be just /sendEmail
    const sendEmail = async email => {
        const res = await axios
            .post('http://localhost:4040/emails/send_email', data)
            .catch(function (error) {
            console.log(error);
            });
            console.log("res: ", res)
            nameInput.value = '';
            subjectInput.value = '';
            emailInput.value = '';
            subjectInput.value ='';
            messageInput.value = '';
            alert('Your message has been sent, thanks!');
            console.log('--SeNd!--');
        };
    sendEmail()
    setName()
    setEmail()
    setMessage()
    setSubject()
    setSent(true)
    };

    function handleNewMessClick () {
        setSent(false)
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

    const handleChangeSubject = (e) => {
        // debugger
    setSubject(e.target.value);
    // console.log("this is message" + e.target.value)
    };

return (
        <>
            {sent ? (<div className="block-2-contact-sent"><div className="first-row-body">
                <div className="box-first-row">
                    <span>letter-sent</span> 
                    <span>x</span>
                </div>
            </div>
            <div className="main-body-contact-sent">
                <h2 className="pink-text">Message sent! ✅</h2>
                <div className="main-body-contact-sent-text"><i className="purple-text">Thank you for messaging me. <br/>You'll receive a reply soon. <br/>Have a nice day!</i></div>
                <div className="button-section">
                    <button className="submit-button" onClick={handleNewMessClick}>new-message</button></div>
                </div></div>) 
                : (<div className="block-2-abtme">
                <div className="first-row-body">
                        {/* form */}
                        <div className="box-first-row">
                            <span>here-to-fill</span> 
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
                        placeholder="hannah montana"/>
                    <label className="yellow-text" for="email">_email:</label>
                    <input 
                        required={true} 
                        onChange={handleChangeEmail} 
                        type="email" 
                        className="contact-input" 
                        name="email"
                        placeholder="hannah_montana@gmail.com"/>
                    <label className="yellow-text" for="email">_subject:</label>
                    <input 
                        required={true} 
                        onChange={handleChangeSubject}
                        type="text" 
                        className="contact-input" 
                        name="subject"
                        placeholder="what you want to tell me about?"/>
                    <label className="yellow-text" for="message">_message:</label>
                    <textarea 
                        required={true} 
                        onChange={handleChangeMessage} 
                        type="text" 
                        className="contact-input2" 
                        name="message"
                        placeholder="type your message here.."/>
                    <div className="button-section">
                    <button className="submit-button">submit-message</button></div>
                </form>
            </div></div>
            )}
            </>
);
}

export default ContactScreen1;
