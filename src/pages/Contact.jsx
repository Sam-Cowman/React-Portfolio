import React, { useState } from 'react';

// Contact component for displaying the contact form
function Contact() {
    // Define formState to hold the values of the form fields
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Define errorMessage to hold validation error messages
    const [errorMessage, setErrorMessage] = useState('');

    // Handle changes in the form fields
    const handleChange = (e) => {
        // Validate email field
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        // Validate other fields
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        // Update form state if there are no error messages
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send data to server)
    };

    return (
        <section>
            <h2>Contact Me</h2>
            {/* Contact form */}
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={formState.name} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={formState.email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={formState.message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

// Function to validate email format using a regular expression
function validateEmail(email) {
    const re = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/;
    return re.test(String(email).toLowerCase());
}

export default Contact;