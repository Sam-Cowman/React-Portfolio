import React from 'react';
import Project from '../components/Project';

// Portfolio component for displaying projects
function Portfolio() {
    // Array of project details
    const projects = [
        {
            title: 'SEO Marketing',
            image: '/assets/images/Marketing src.jpg',
            deployedLink: 'https://sam-cowman.github.io/SEO-Marketing-Site/',
            githubLink: 'https://github.com/sam-cowman/SEO-Marketing-Site'
        },
        {
            title: 'Weather Dashboard',
            image: '/assets/images/weather-dashboard.jpg',
            deployedLink: 'https://sam-cowman.github.io/Weather-Dashboard/',
            githubLink: 'https://github.com/Sam-Cowman/Weather-Dashboard'
        },
        {
            title: 'E-Commerce Site',
            image: '/assets/images/e-commerce-screenshot.jpg', 
            deployedLink: 'https://drive.google.com/file/d/1teiglVdim21wCeRCSmOlVX0vLycf-Ij5/view',
            githubLink: 'https://github.com/Sam-Cowman/E-Commerce'
        },
        {
            title: 'Tech Blog',
            image: '/assets/images/blog-homepage.jpg',
            deployedLink: 'https://tech-blog-9kmk.onrender.com',
            githubLink: 'https://github.com/Sam-Cowman/Tech-Blog'
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
