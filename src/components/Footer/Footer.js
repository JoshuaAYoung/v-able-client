import React from 'react';
import './Footer.css'

export default function Footer() {
  function generateCopyright() {
    let d = new Date();
    let year = d.getFullYear();
    return year;
  }

  return (
    <footer className='footer'>
      <div className='footerWaveContainer'>
        <img src='/assets/top-waves.svg' alt='wavy border' className='footerWave' />
      </div>
      <div className='footerInside'>
        <div className='socialContainer'>
          <a href='mailto:joshua@young.net' className='mailToLink' target='_blank' rel="noopener noreferrer">
            <img src='/assets/email-logo.svg' alt='email logo' className='socialImage' />
          </a>
          <a href='https://github.com/JoshuaAYoung' target='_blank' className='githubLink' rel="noopener noreferrer">
            <img src='/assets/github-logo.svg' alt='github logo' className='socialImage' />
          </a>
          <a href='https://www.linkedin.com/in/joshua-young-250a7512' target='_blank' className='linkedinLink' rel="noopener noreferrer">
            <img src='/assets/linkedin-logo.svg' alt='linkedin logo' className='socialImage' />
          </a>
        </div>
        <p className='copyright'>
          Copyright &copy; {generateCopyright()}
          <br />
          <a href='https://joshyoung.net' target='_blank' rel='noopener noreferrer' className='boldLink'>Josh Young</a>
        </p>
      </div>
    </footer >
  );
}
