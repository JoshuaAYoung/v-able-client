import React from 'react';

function LandingPage() {
  return (
    <div className="landingMain">
      <header role="banner" className="landingBanner">
        <h1>Qualinteer</h1>
        <h2>Gift your experience</h2>
      </header>
      <section className="landingDescription">
        <header>
          <h3>A Unique Way to Give Back</h3>
        </header>
        <p>Qualinteer is a place where non-profit organizations in need of skilled labor are connected with volunteers that have the exertise required to help.</p>
        <p>
          A lot of volunteer work consists of unskilled labor, which is great if that's what's needed. When it comes to shopping for professional services and skilled labor, though, non-profits tend to pay market rate.
        </p>
        <p>
          In part, this is an issue with the tools available. Hiring volunteers to pack boxes or serve soup is a simple process. Volunteer coordinators can blanket the social media airwaves with the same ad, since just about any warm body will do. Finding someone with the expertise to build you a website or design your new office can be a little more complicated, though. Also want them to work pro-bono? For that you need Qualinteer...
        </p>
      </section>
      <section className="landingInstructions">
        <header>
          <h3>Let's Get Giving</h3>
        </header>
        <p>If you want to volunteer, take a look at the job board (no login required) to find ways in which you can give back. Whether you're seeking help or offering it, you can click on the "Sign up" button at the top of the page to create an account. If you already have an account, you can click on "Log in" in the navigation bar.</p>
        <p>If you specify that you're looking to volunteer, once you login you'll be able to apply to any of the jobs listed. If you specify that you're in need of volunteers, once you log in you'll be able to post a job to the job board.</p>
      </section>
    </div>
  );
}

export default LandingPage;