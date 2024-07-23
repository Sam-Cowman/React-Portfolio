import React from 'react';

function Resume() {
    return (
        <section>
            <h2>Resume</h2>
            <p>Download my <a href="/path/to/your/resume.pdf" download>resume</a></p>
            <h3>Proficiencies</h3>
            <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>SQL</li>
                {/* Add more proficiencies here */}
            </ul>
        </section>
    );
}

export default Resume;