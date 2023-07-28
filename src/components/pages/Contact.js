import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Contact() {

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleCursorleave = (event) => {
        const { name, value } = event.target;
        if(value.trim() === '') {
            alert(`${name} is required`);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const emailinput = document.getElementById('email');
        const email = emailinput.value;
        if(!validateEmail(email)) {
            alert('Please enter a valid email address');
        }
    };


    return (
        <div>
            <h2>Contact Me</h2>
            <p>
            If you would like to work with me, please contact me at tyler.mifflin1@hotmail.com or reach me at 801-580-6702.
            </p>
            {/* add a contact form that lets user put in name, email, and message and validates email */}
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Your name.." required></input>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Your email.." required></input>
                <label for="message">Message:</label>
                <textarea id="message" name="message" placeholder="Write something.." required></textarea>
                <input type="submit" value="Submit"></input>
            </form>
        </div>


    )
}

