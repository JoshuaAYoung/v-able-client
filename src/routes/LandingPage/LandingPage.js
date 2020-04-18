import React, { Component } from 'react';
import './LandingPage.css'
import ScrollToTopOnMount from '../../utilities/ScrollToTopOnMount'

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landingMain">
        <ScrollToTopOnMount />
        <div className="landingBanner">
          <div className='heroTextContainer'>
            <h1 className='pageHeader'>Experience as a Gift.</h1>
            <p className='pageInstructions landingInstructions'><span className='defaultMedium'>v<span className='inlineBullet'>&bull;</span>able</span> is a platform for connecting <span className='defaultMedium'><u>viable</u></span>, <span className='defaultMedium'><u>volunteerable</u></span>, <span className='defaultMedium'><u>very able</u></span> people to the causes that they find most <span className='defaultMedium'><u>valuable</u></span>.</p>
          </div>
          <img src='/assets/landing-hero.svg' alt='people working on a spaceship' className='heroImage' />
        </div>
        <section className='callToAction textCenter'>
          <div className='actionVolContainer'>
            <div className='actionDescriptionContainer'>
              <h2 className='subHeader'>Offer Your Expertise.</h2>
              <p>
                Are you a volunteer who’s passionate about giving back? v<span className='inlineBullet'>&bull;</span>able makes it easy to find causes that inspire you. And by offering up your experience in addition to your time, you’re increasing the value of every single minute spent volunteering.
            </p>
            </div>
            <div className='actionInstructionsVol'>
              <img src='/assets/volunteer.svg' alt='a computer with an application' className='actionImage' />
              <p className='actionInstructions'>
                Click on the “Volunteer” button to be directed to the opportunity board page to see available volunteer positions and to apply.
            </p>
              <button className='actionButton' onClick={() => this.props.history.push('/opportunityboard')}>Volunteer</button>
            </div>
          </div>
          <div className='actionSeparator'></div>
          <div className='actionOrgContainer'>
            <div className='actionDescriptionContainer'>
              <h2 className='subHeader'>Find skilled help.</h2>
              <p>
                As a non-profit organization, we know how hard it can be to find passionate volunteers. Looking for a passionate volunteer who can also build you a website or design you a new office? For that you need an extensive network of skilled individuals like v<span className='inlineBullet'>&bull;</span>able.
            </p>
            </div>
            <div className='actionInstructionsOrg'>
              <img src='/assets/recruit.svg' alt='a woman connecting with people' className='actionImage' />
              <p className='actionInstructions'>
                Once you’ve logged in as an organization, click the “Recruit Help” button to post  an opportunity and find volunteers.
              </p>
              <button className='actionButton' onClick={() => this.props.history.push('/opportunitypost')}>Recruit Help</button>
            </div>
          </div>
        </section>
        <section className='appFeatures'>
          <div className='waveContainer'>
            <img src='/assets/top-waves.svg' alt='wavy border' className='topWaves' />
          </div>
          <div className='featuresContainer'>
            <div className='featureSubHeader'>
              <h2 className='subHeader featuresSubHeader'>Now this is
              <br />
              feature-rich volunteering.</h2>
              <img src='/assets/hands-hearts.svg' alt='hands up holding hearts' className='handsImage' />
            </div>
            <div className='features'>
              <div className='featureContainer'>
                <img src='/assets/checkmark.svg' alt='checkmark' className='featureCheck' />
                <div className='feature'>
                  <h4 className='smallHeader'>Opportunity Board</h4>
                  <p>
                    All opportunities in one place. Search by location or keyword.
                  </p>
                </div>
              </div>
              <div className='featureContainer'>
                <img src='/assets/checkmark.svg' alt='checkmark' className='featureCheck' />
                <div className='feature'>
                  <h4 className='smallHeader'>Registration and Login</h4>
                  <p>
                    Real authentication using advanced security techniques.
                  </p>
                </div>
              </div>
              <div className='featureContainer'>
                <img src='/assets/checkmark.svg' alt='checkmark' className='featureCheck' />
                <div className='feature'>
                  <h4 className='smallHeader'>Opportunity Post</h4>
                  <p>
                    Create an opportunity using the embedded rich text editor.
                  </p>
                </div>
              </div>
              <div className='featureContainer'>
                <img src='/assets/checkmark.svg' alt='checkmark' className='featureCheck' />
                <div className='feature'>
                  <h4 className='smallHeader'>Volunteer Button</h4>
                  <p>
                    Opens the default email client with pre-populated info.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='waveContainer'>
            <img src='/assets/bottom-waves.svg' alt='wavy border' className='bottomWaves' />
          </div>
        </section>
        <section className='testimonials textCenter'>
          <img src='/assets/megaphone.svg' alt='megaphone' className='megaphoneImage' />
          <h2 className='subHeader inline'>Testimonials.</h2>
          <div className='testimonialsContainer'>
            <div className='testimonial'>
              <p className='testimonialQuote'>“We had no problem getting volunteers to pack trucks. But when we needed an architect, we had a difficult time finding one that would work pro-bono.  That is, until we discovered v<span className='inlineBullet'>&bull;</span>able.”
            </p>
              <p className='testimonialAuthor defaultMedium'>- Rachael Goodman (Dance for Humanity)</p>
            </div>
            <div className='testimonial'>
              <p className='testimonialQuote'>“We made a lot of calls trying to find a qualified volunteer veterinarian with no luck. A friend told us to check out v•able and the rest is history. Dr. Lolanda has been with us for 4 years now and we couldn’t be happier.”</p>
              <p className='testimonialAuthor defaultMedium'>- Broderick Hart (All Cats Foundation)</p>
            </div>
            <div className='testimonial'>
              <p className='testimonialQuote'>“We’ve used v•able for years for all of our volunteer needs. It’s a perfect fit for us.”</p>
              <p className='testimonialAuthor defaultMedium'>- Sadie Giver (The Bunny Sanctuary)</p>
            </div>
            <div className='testimonial'>
              <p className='testimonialQuote'>“v<span className='inlineBullet'>&bull;</span>able makes finding skilled volunteers so simple and easy. I wish I had found it sooner!”
            </p>
              <p className='testimonialAuthor defaultMedium'>- Miranda Sainthouse (Burn Awareness Institute)</p>
            </div>
          </div>
        </section>
      </div >
    );
  }
}