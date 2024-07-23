import React from 'react';

function Project({ title, image, deployedLink, githubLink }) {
    return (
        <div className="project">
            <h3>{title}</h3>
            <a href={deployedLink} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={title} className="project-image" />
            </a>
            <p>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </p>
        </div>
    );
}

export default Project;
