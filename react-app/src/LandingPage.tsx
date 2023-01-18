import React from 'react';
import './landingPage.css';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <>
      <body>
        <div id="landingPageApp">
            <div className='container'>
              <div className='hero-content'>
                <span className='hero-span'> Arminas Aleinikovas </span>
                <h1 className='hero-h1'> Junior Web Developer</h1>
                <p className='banner-para'> Pivoting my career towards Software Development is an exciting process.
                  At this present time I’m working as a freelancer with a senior Developer.
                  If you would like to know more about my current position, please feel free to contact me.
                </p>

                <div className='button-container'>
                  <div>
                    <a className='hero-a btn-1' href="/Home"> Home </a>
                  </div>
                  <div>
                    <a className='hero-a btn-2' href="Resume.docx" download> Resume </a>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </body>
    </>
  );
};
