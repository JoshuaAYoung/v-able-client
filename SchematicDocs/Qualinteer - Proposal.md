# QUALINTEER

## Give the gift of your carefully cultivated skills

### General Proposal

I am proposing to create an app called Qualinteer that essentially connects non-profits and others in need of skilled volunteer labor with those people that have those skills and want to donate their time. 

My architecture and engineering firm often donates time packaging meals into containers for a non-profit called Food for Thought. While this is a worthwhile endeavor in that it is giving back, it's also menial labor and something someone could get paid minimum wage to do. Our firm charges anywhere from $100 to $200 an hour for our services. 
It occured to me that a better way to give back would be to use the skills that you've spent a long time cultivating. This could be anything, from web design, to architecture, construction, teaching, accounting, legal advice, physical therapy, entertainment... just about anything really.

### Specifics

Generally, this will be sort of a "gig board" app. Because users and their information are such a main part of a gig board app, I am pretty set on trying Auth for at least one user type, possibly two.

One of the things I like about this idea is that it could be made pretty simply, with a lot of room to add complexity as time permits. I think a relatively good bar to set my goals on would be the following views:

* Landing - info about the company with links to login, register, or view the gig board
* Registration page - a place where companies or volunteers can sign up
 * Volunteer's don't necessarily need to login - could just have an application form - or maybe even a link to email with prefilled info
* Login form - may not be a separate form but more of a dropdown - still unclear
* Opportunity creation form - a place for logged in companies to create a volunteer gig
* Opportunity board - a place where users can go to see all of the gigs listed
* An application form - this may not be necessary - it could be as simple as the logged in volunteer just clicks a button to have their info sent to the company

The backend might look something like:
* two main endpoints, one for user registration and one for gigs
* gigs and users tables - possibly one table for each type of user
  * as gigs are only linked to one company and, if no complexity is added, to no volunteers - I think we're dealing with a one to many database setup
  
Complexity if time permits:
* Two user types: company and volunteer
* A way to update gig data (extra view)
* A way to update user data (extra view)
* A way for users to track the gigs they've applied for - this would require a many to many DB setup
 * if a "view profile" page is created, could be that below user info, we could display a list of gigs that the user has applied for
* A way for companies to see the volunteers that have applied for their gigs 
 * Could be that the same "view profile" page is used for companies and users, just with slightly different data - below their user profile info could be a list of their gigs and volunteers that have applied for them
* A page for companies to view gig applicants profiles
* JWT auth
* Snapshot and unhappy path testing