import React from 'react';
import Project from '../components/Project';

// Portfolio component for displaying projects
function Portfolio() {
    // Array of project details
    const projects = [
        {
            title: 'SEO Marketing',
            image: '/src/assets/images/Marketing src .jpg',
            deployedLink: 'https://sam-cowman.github.io/SEO-Marketing-Site/',
            githubLink: 'https://github.com/sam-cowman/SEO-Marketing-Site'
        },
        {
            title: 'Landing Page',
            image: '/src/assets/images/landing-page-screenshot.jpg',
            deployedLink: 'https://sam-cowman.github.io/Landing-page/',
            githubLink: 'https://github.com/sam-cowman/Landing-page'
        },
        {
            title: 'E-Commerce Site',
            image: '/src/assets/images/e-commerce-screenshot.jpg', // Add the screenshot to this path
            deployedLink: 'https://github.com/Sam-Cowman/E-Commerce',
            githubLink: 'https://github.com/Sam-Cowman/E-Commerce'
        }
        // Add more projects here...
    ];

    return (
        <section>
            <h2>Portfolio</h2>
            <div className="projects">
                {projects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
        </section>
    );
}

export default Portfolio;
