import React from 'react';
import './App.css';

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
                         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                         sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className='about-me-content'>
                    <h2 className='about-me-para-header'> Section 2 </h2>
                    <div className='underline-2'> </div>
                    <p className='about-me-para'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
        </>
    );
};
