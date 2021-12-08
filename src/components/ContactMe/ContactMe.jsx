import { useState } from 'react'
import "./contactme.scss"
import emailjs from 'emailjs-com'
import React, { useRef } from 'react';

export default function Contact() {
    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);

        emailjs.sendForm(
            'service_jy1of3z',
            'template_7r6gw5b',
            e.target,
            'user_UlCn208XfdTL0Hv78Pyyy'
        ).then(res=>{
            console.log(res)
        }).catch(err=> console.log(err));
    }
    return (
        <div className="contactme" id="contactme" >
            <div className="left">
                <img src="" alt="" />
            </div>
            <div className="right">
                <h2>Contact Me</h2>
                <form onSubmit={handleSubmit}>

                    <input type="text" name="name" placeholder="Name" />
                    
                    <input type="text" name="userEmail" placeholder="Email" />

                    <textarea placeholder="Message" name="message" rows="10"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thank you for the interest, I will make sure to get back to you soon.</span>}
                </form>
            </div>
        </div>
    )
}