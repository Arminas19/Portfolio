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
                    <h2 className='about-me-para-header'> Section 1 </h2>
                    <div className='underline-2'> </div>
                    <p className='about-me-para'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className='about-me-para'> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                         sint occaecat cupidatat non proident, sunt in.
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
                        sint occaecat cupidatat non proident, sunt in.
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

        <h1 className='line-break' style={{marginTop: '100px', marginBottom: '100px'}}><span className='line-break-word'> Projects </span> </h1>

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

        <h1 className='line-break2' style={{marginBottom: '100px', marginTop: '150px'}}><span className='line-break-word'> Contact </span> </h1>
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
                    <h2> Full-Stack Developer <br/><span> What can I do? </span> </h2>
                    <p className='open-to-work-para'> I am a full-stack developer capable of creating databases, planning out UI designs, and implementing them onto a website using 
                        React, JavaScript, TypeScript, HTML, CSS, Python / Django, firebase, Bootstrap, and more
                    </p>
                </div>
            </div>
        </div>        
        </>
    );
};
