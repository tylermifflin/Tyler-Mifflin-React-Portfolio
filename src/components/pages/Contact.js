import React from 'react';

export default function Contact() {
    return (
        <div>
            <h1>Contact Me</h1>
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

