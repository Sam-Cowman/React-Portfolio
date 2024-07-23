import React from 'react';

// Resume component for displaying the resume section
function Resume() {
    return (
        <section>
            <h2>Resume</h2>
            <p>Download my <a href="/resume.pdf" download="Samantha_Cowman_Resume.pdf">resume</a></p>
            <h3>Proficiencies</h3>
            <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>SQL</li>
            </ul>
        </section>
    );
}

export default Resume;