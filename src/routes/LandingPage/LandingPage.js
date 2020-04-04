import React from 'react';
import './LandingPage.css'

function LandingPage() {
  return (
    <div className="landingMain">
      <header role="banner" className="landingBanner">
        <h1 className='pageHeader'>Experience as a Gift.</h1>
        <p className='pageInstructions'><span className='defaultMedium'>v<span className='inlineBullet'>&bull;</span>able</span> is a platform for connecting <span className='defaultMedium'><u>viable</u></span>, <span className='defaultMedium'><u>volunteerable</u></span>, <span className='defaultMedium'><u>very able</u></span> people to the causes that they find <span className='defaultMedium'><u>valuable</u></span>.</p>
        <img src='/assets/landing-hero.svg' alt='people working on a spaceship' className='heroImage' />
      </header>
      <section className='callToAction textCenter'>
        <h2 className='subHeader'>Ok. Let's get Giving.</h2>
        <div className='actionContainer'>
          <a href='/register' className='actionLink'>
            <img src='/assets/login.svg' alt='a screen showing secure login' className='actionImage' />
            <h4 className='smallHeader'>Register</h4>
            <p>
              Whether you’re a volunteer or looking for one, you can click here to create an account. Once you’re registered, you can click here to login.
            </p>
          </a>
        </div>
        <div className='actionContainer'>
          <a href='/register' className='actionLink'>
            <img src='/assets/recruit.svg' alt='a woman connecting with people' className='actionImage' />
            <h4 className='smallHeader'>Recruit</h4>
            <p>
              Looking to find skilled help? Once you have an organization account you can click here to login, then head over to the opportunity post page to recruit volunteers.
            </p>
          </a>
        </div>
        <div className='actionContainer'>
          <a href='/opportunityboard' className='actionLink'>
            <img src='/assets/volunteer.svg' alt='a computer with an application' className='actionImage' />
            <h4 className='smallHeader'>Volunteer</h4>
            <p>
              Have a special skill that you’d like to contribute? Click here to head over to the opportunity board page to find ways in which you can give back. Anyone can browse available opportunities, but you'll need to be logged in as a volunteer to apply.
            </p>
          </a>
        </div>
      </section>
      <section className='appFeatures'>
        <div className='waveContainer'>
          <img src='/assets/top-waves.svg' alt='wavy border' className='topWaves' />
        </div>
        <div className='featureContainer'>
          <h2 className='subHeader noTopMargin'>Now this is
        <br />
        feature-rich volunteering.</h2>
          <div className='features'>
            <img src='/assets/hands-hearts.svg' alt='hands up holding hearts' className='handsImage' />
            <img src='/assets/checkmark.svg' alt='checkmark' className='featureCheck' />
            <div className='feature'>
              <h4 className='smallHeader'>Opportunity Board</h4>
              <p>
                All opportunities in one place. Search by location or keyword.
            </p>
            </div>
            <img src='/assets/checkmark.svg' alt='checkmark' className='featureCheck' />
            <div className='feature'>
              <h4 className='smallHeader'>Registration and Login</h4>
              <p>
                Real authentication using advanced security techniques.
            </p>
            </div>
            <img src='/assets/checkmark.svg' alt='checkmark' className='featureCheck' />
            <div className='feature'>
              <h4 className='smallHeader'>Opportunity Post</h4>
              <p>
                Create an opportunity using the embedded rich text editor.
            </p>
            </div>
            <img src='/assets/checkmark.svg' alt='checkmark' className='featureCheck' />
            <div className='feature'>
              <h4 className='smallHeader'>Volunteer Button</h4>
              <p>
                Opens the default email client with pre-populated info.
            </p>
            </div>
          </div>
        </div>
        <div className='waveContainer'>
          <img src='/assets/bottom-waves.svg' alt='wavy border' className='bottomWaves' />
        </div>
      </section>
      <section className='testimonials textCenter'>
        <div className='testimonialsContainer'>
          <img src='/assets/megaphone.svg' alt='megaphone' className='megaphoneImage' />
          <h2 className='subHeader inline'>Testimonials.</h2>
          <div className='testimonial'>
            <p className='testimonialQuote'>“We’ve used v•able for years for all of our volunteer needs. It’s a perfect fit for us.”</p>
            <p className='testimonialAuthor defaultMedium'>- Sadie Giver (Hands For America)</p>
          </div>
          <div className='testimonial'>
            <p className='testimonialQuote'>“We had no problem getting volunteers to pack trucks. But when we needed an architect, we had a difficult time finding one that would work pro-bono.  That is, until we discovered v<span className='inlineBullet'>&bull;</span>able.”
            </p>
            <p className='testimonialAuthor defaultMedium'>- Rachael Goodman (Food All Around)</p>
          </div>
          <div className='testimonial'>
            <p className='testimonialQuote'>“v<span className='inlineBullet'>&bull;</span>able makes finding skilled volunteers so simple and easy. I wish I had found it sooner!”
            </p>
            <p className='testimonialAuthor defaultMedium'>- Miranda Sainthouse (All Cats Foundation)</p>
          </div>
        </div>
      </section>
    </div >
  );
}

export default LandingPage;