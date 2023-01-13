import React from 'react';
import './App.css';
import Contact from './components/Contact';

export default function Home() {
    return (
        <>
        <div className='About-me-div-banner'></div>
        <div className='About-me-div'>
            <h1 className='aqua-color about-me-header'> LITTLE ABOUT ME </h1>
            <div className='underline'> </div>
            <div id='about-me-wrapper'>
                <div className='about-me-content'>
                    <h2 className='about-me-para-header'> Section 1 </h2>
                    <div className='underline-2'> </div>
                    <p className='about-me-para'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className='about-me-para'> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                         sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className='about-me-content'>
                    <h2 className='about-me-para-header'> Section 2 </h2>
                    <div className='underline-2'> </div>
                    <p className='about-me-para'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className='about-me-para'>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>

        <div id='skills-section'>
            <div className='skills-wrapper'>
                <div className='skills-content'>
                    <img className='skills-image' src="logo192.png" alt="skills image" width='105' height='105'/>
                </div>
                <div className='skills-content'>
                    <img className='skills-image' src="javascript-logo-updated.png" alt="skills image" width='105' height='105'/>
                </div>
                <div className='skills-content'>
                    <img className='skills-image' src="jquery-logo-updated.png" alt="skills image" width='105' height='105'/>
                </div>
                <div className='skills-content'>
                    <img className='skills-image' src="python-logo-updated.png" alt="skills image" width='105' height='105'/>
                </div>
                <div className='skills-content'>
                    <img className='skills-image' src="django-logo-updated.png" alt="skills image" width='105' height='105'/>
                </div>
                <div className='skills-content'>
                    <img className='skills-image' src="css-logo-updated.png" alt="skills image" width='105' height='105'/>
                </div>
                <div className='skills-content'>
                    <img className='skills-image' src="bootstrap-logo-updated.png" alt="skills image" width='105' height='105'/>
                </div>
            </div>
        </div>

            <div className='project-title-container'>
                <div className='project-title-div'>
                    <h1 className='project-title'> Projects</h1>
                </div>
            </div>
        <div id='project-container'>

            <div className='cards'>
                <div className='card card1'>
                    <div className='card-container'>
                        <img className='project-image' src="about-me-image.jpg" alt="project image"/>
                    </div>
                        <div className='card-details'>
                            <h3> New York </h3>
                            <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                </div>

                <div className='card card2'>
                    <div className='card-container'>
                        <img className='project-image' src="about-me-image.jpg" alt="project image"/>
                    </div>
                        <div className='card-details'>
                            <h3> New York </h3>
                            <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                </div>

                <div className='card card3'>
                    <div className='card-container'>
                        <img className='project-image' src="about-me-image.jpg" alt="project image"/>
                    </div>
                        <div className='card-details'>
                            <h3> New York </h3>
                            <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                </div>
                
                <div className='card card4'>
                    <div className='card-container'>
                        <img className='project-image' src="about-me-image.jpg" alt="project image"/>
                    </div>
                        <div className='card-details'>
                            <h3> New York </h3>
                            <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                </div>

                <div className='card card5'>
                    <div className='card-container'>
                        <img className='project-image' src="about-me-image.jpg" alt="project image"/>
                    </div>
                        <div className='card-details'>
                            <h3> New York </h3>
                            <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                </div>

                <div className='card card6'>
                    <div className='card-container'>
                        <img className='project-image' src="about-me-image.jpg" alt="project image"/>
                    </div>
                        <div className='card-details'>
                            <h3> New York </h3>
                            <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                </div>
            </div>
        </div>

        <div id='open-to-work-section-div'>
            <div className='open-to-work-container'>
                <div className='open-to-work-content'>
                    <h2> Open To Work - Locations </h2>
                    <p className='open-to-work-para'> I am available to work in Dublin, Kildare, partcly in Meath and remotly  
                    </p>
                    <p className='open-to-work-para'> I am open to working in new location outside of the listed ones above. if need relocationg for a job i will consider it 
                        as a valuable opertunity for me.
                    </p>
                </div>
                <div className='open-to-work-content'>
                    <h2> Full-Stack Developer <br/><span> What can I do? </span> </h2>
                    <p className='open-to-work-para'> I am a full-stack developer capable of creating database's, planning out UI designs and implementing them onto a website using 
                        React, JavaScript, TypeScript, HTML, CSS, Python / Django, firebase, Bootstrap and more
                    </p>
                </div>
            </div>
        </div>

        <div className='contact-title-container'>
                <div className='contact-title-div'>
                    <h1 className='contact-title'> Contact</h1>
                </div>
        </div>

        <Contact />
        </>
    );
};
