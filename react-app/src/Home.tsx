import React from 'react';
import './App.css';
import Contact from './components/Contact';

export default function Home() {
    return (
        <>
            <div id='Top'></div>
            <div className='About-me-div-banner'></div>
            <div className='About-me-div'>
                <h1 className='aqua-color about-me-header'> LITTLE ABOUT ME </h1>
                <div className='underline'> </div>
                <div id='about-me-wrapper'>
                    <div className='about-me-content'>
                        <h2 className='about-me-para-header'>Careers </h2>
                        <div className='underline-2'> </div>
                        <p className='about-me-para'> I'm a young Individual, 21 years old. I haven't had many jobs but in the ones I did have I tried working my very best.
                        </p>
                        <p className='about-me-para'> I worked part-time at Macdonald's while still attending my Secondary School (6th year).
                            I worked with a friend's dad as a carpet fitter assistant during 3rd year of Secondary school (Part-Time)
                            and for my 5th year of secondary school I worked with my dad as a 'groundworker'.
                        </p>
                    </div>
                    <div className='about-me-content'>
                        <h2 className='about-me-para-header'> Coding </h2>
                        <div className='underline-2'> </div>
                        <p className='about-me-para'> I began my coding journey in a Computer Science course at Blackrock Further Education Institute,
                        where I studied Java, HTML, CSS, and JavaScript, and learned about algorithms and data structures.
                        I then studied software development at Code Institute, where I learned Python, Flask, Django, Bootstrap, and more.
                        Currently, I am self-teaching myself Firebase and React and plan to learn Redux and Tailwind too.
                        </p>
                    </div>
                </div>
            </div>

            <h1 className='line-break3' style={{ marginTop: '100px' }}><span className='line-break-word'> SKILLS I USE </span> </h1>
            <div id='skills-section'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-8 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                            <div className="skills-content">
                                <div className='skills-wrapper'>
                                    <h3> JavaScript </h3>
                                    <p> I have used JavaScript and jquery for almost 3 years now.
                                        I feel comfortable with what I have learned from these languages. Currently,
                                        I'm learning how to use TypeScript on my React and JavaScript projects.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-8 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                            <div className="skills-content">
                                <div className='skills-wrapper'>
                                    <h3> ReactJS</h3>
                                    <p> I have started using the JavaScript frameworks like 'React.js' for some of my projects.
                                        I created this website using React.js and Firebase for some of the backend.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-8 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                            <div className="skills-content">
                                <div className="skills-wrapper">
                                    <h3> CSS </h3>
                                    <p> I have used CSS alongside HTML since the start of my coding Journey,
                                        now I am experienced with Bootstrap and looking to expand my skill set by
                                        learning Tailwind CSS.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-8 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                            <div className="skills-content">
                                <div className="skills-wrapper">
                                    <h3> Python </h3>
                                    <p> I studied Python, Django, and Flask with Code Institute,
                                        creating projects and E-commerce stores also implementing Stripe &
                                        using AWS to Host some of the project data.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-8 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                            <div className="skills-content">
                                <div className="skills-wrapper">
                                    <h3> Tools </h3>
                                    <p> I have used many tools / other languages before, too many to list them all but some of the main ones Include:
                                        Stripe, AWS, Git / Bash, Gitpod, Github, JSON, Heroku, MySQL, PostgreSQL, HTMX, Jest, SQLite VSCode & Postman.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-8 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                            <div className="skills-content">
                                <div className="skills-wrapper">
                                    <h3> JAVA </h3>
                                    <p> JAVA is my first ever backend language that I have used,
                                        I studied and created projects using JAVA in Blackrock Further Education
                                        Institute.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className='line-break' style={{ marginTop: '100px', marginBottom: '100px' }}><span className='line-break-word'> Projects </span> </h1>

            <div id='project-container'>

                <div className='cards'>
                    <div className='card card1'>
                        <div className='card-container'>
                            <img className='project-image' src="" alt="project image" />
                        </div>
                        <div className='card-details'>
                            <h3> Creative Designs </h3>
                            <p>Creative Designs is an E-commerce site designed to attract a customer to our community and to buy our product.
                                This website is created with Django and Python but also uses other tools and libraries.
                                You can find more about the website at the GitHub repo.
                            </p>
                            <a href='https://github.com/Arminas19/Graphic_Design_Content' target='_blank'> <button className='card-button'>  GitHub </button> </a>
                        </div>
                    </div>

                    <div className='card card2'>
                        <div className='card-container'>
                            <img className='project-image' src="" alt="project image" />
                        </div>
                        <div className='card-details'>
                            <h3> Thoirn & Company Website </h3>
                            <p>Thoirn & Company Website is a website dedicated to Thoirn & Company of course.
                                The website is created using Python & Flask mostly.
                                I created this website while I was studying at Code Institute if you want to
                                learn more about this website check out the GitHub repo.
                            </p>
                            <a href='https://github.com/Arminas19/Flask_repo' target='_blank'> <button className='card-button'>  GitHub </button> </a>
                        </div>
                    </div>

                    <div className='card card3'>
                        <div className='card-container'>
                            <img className='project-image' src="about-me-image.jpg" alt="project image" />
                        </div>
                        <div className='card-details'>
                            <h3> Memory Game Website </h3>
                            <p>Memory game is basically a game where you have to remember the sequence of a flash
                                and then you have to play back that sequence once it's done.
                                This website game is fully tested using Jest and the game is created using JavaScript.
                            </p>
                            <a href='https://github.com/Arminas19/Jest_website' target='_blank'> <button className='card-button'>  GitHub </button> </a>
                        </div>
                    </div>

                    <div className='card card4'>
                        <div className='card-container'>
                            <img className='project-image' src="about-me-image.jpg" alt="project image" />
                        </div>
                        <div className='card-details'>
                            <h3> Whiskey Drop Web Page </h3>
                            <p>
                                Whiskey Drop is a web Page created using HTML, CSS, MailChimp & Bootstrap. This website is my introduction to bootstrap & MailChimp.
                                With the help of Code Institute, we created this Website.
                                (I added more of my content into this after creating this website with Code Institute).
                            </p>
                            <a href='https://github.com/Arminas19/Bootstrap-v4.5' target='_blank'> <button className='card-button'>  GitHub </button> </a>
                        </div>
                    </div>

                    <div className='card card5'>
                        <div className='card-container'>
                            <img className='project-image' src="about-me-image.jpg" alt="project image" />
                        </div>
                        <div className='card-details'>
                            <h3> 2 Mini ReactJS Projects </h3>
                            <p>
                                Here I have 2 components I have created myself.
                                One Component is a To-Do List & the other component is a countdown timer for a specified date calculator.
                                They's components are entirely made with React, you can check them out fully in the repos below.
                            </p>
                            <a href=' https://github.com/Arminas19/ReactJs_todo_app' target='_blank'> <button className='card-button'>  TO-Do List </button> </a>
                            <a href='https://github.com/Arminas19/CountDown_React' target='_blank'> <button className='card-button'>  Countdown Timer </button> </a>
                        </div>
                    </div>

                    <div className='card card6'>
                        <div className='card-container'>
                            <img className='project-image' src="about-me-image.jpg" alt="project image" />
                        </div>
                        <div className='card-details'>
                            <h3> Currently Working On </h3>
                            <p>I'm currently working on a Website with many different designs and styles to showcase what I can do.
                                Some Web pages use APIs to display certain data on a user's screen.
                                f you want to check out this website please click the repo button down below.
                            </p>
                            <a href='https://github.com/Arminas19/Web-pages' target='_blank'> <button className='card-button'>  GitHub </button> </a>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className='line-break2' style={{ marginBottom: '100px', marginTop: '150px' }}><span className='line-break-word'> Contact </span> </h1>
            <Contact />

            <div id='open-to-work-section-div'>
                <div className='open-to-work-container'>
                    <div className='open-to-work-content'>
                        <h2> Open To Work - Locations </h2>
                        <p className='open-to-work-para'> I am available to work in Dublin, Kildare, partially in Meath and remotely
                        </p>
                        <p className='open-to-work-para'> I am open to working in a new location outside of the listed ones above. if need relocating for a job I will consider it
                            as a valuable opportunity for me.
                        </p>
                    </div>
                    <div className='open-to-work-content'>
                        <h2> Full-Stack Developer <br /><span> What can I do? </span> </h2>
                        <p className='open-to-work-para'> I am a full-stack developer capable of creating databases, planning out UI designs, and implementing them onto a website using
                            React, JavaScript, TypeScript, HTML, CSS, Python / Django, firebase, Bootstrap, and more
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
