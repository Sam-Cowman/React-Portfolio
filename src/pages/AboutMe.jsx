import React from 'react';
import myPhoto from '/src/assets/images/Sam Cowman.jpg'; 
import dogsPhoto from '/src/assets/images/dogs test.jpg'; 

function AboutMe() {
    return (
        <section>
            <h2>About Me</h2>
            <img src={myPhoto} alt="Sam Cowman" className="profile-photo" />
            <p>Hi, my name is Sam. I am currently learning to code with the Northwestern Bootcamp. My portfolio shows all the work that I have done in this bootcamp, and I will continue to add more work to it. But I'd love for you to get to know me a little bit more.</p>
            <div className="fun-facts">
                <h3>Fun Facts</h3>
                <ul>
                    <li>I have 3 dogs at home: a husky, a black lab, and a terrier mix.</li>
                    <li>I enjoy watching reality TV, and my favorite shows are on Bravo.</li>
                    <li>I love reading fantasy books. Some of my favorite authors include J.K. Rowling, Brandon Sanderson, and George R.R. Martin.</li>
                </ul>
                <div>
                    <p>Bonus! Here are my dogs!</p>
                    <img src={dogsPhoto} alt="My three dogs" className="dogs-photo" />
                </div>
            </div>
        </section>
    );
}

export default AboutMe;