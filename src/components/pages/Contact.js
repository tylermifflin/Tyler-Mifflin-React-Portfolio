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
            <form className='form-control mb-3' onSubmit={handleSubmit}>
                <div className='mb-3'>
                <label for="name" className='form-label'>Name:</label>
                <input type="text" id="name" name="name" className='form-control' placeholder="Your name.." required onCusorleave={handleCursorleave}></input>
                </div>
                <div className='mb-3'>
                <label for="email" className='form-label'>Email:</label>
                <input type="email" id="email" name="email" className='form-control' placeholder="Your email.." required onCusorleave={handleCursorleave}></input>
                </div>
                <div className='mb-3'>
                <label for="message" className='form-label'>Message:</label>
                <textarea id="message" name="message" className='form-control' placeholder="Write something.." required onCusorleave={handleCursorleave}></textarea>
                </div>
                <input type="submit" value="Submit" className='btn btn-primary mt-3'></input>
            </form>
        </div>


    )
}
