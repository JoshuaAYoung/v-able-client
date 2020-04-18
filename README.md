<img src="http://joshyoung.net/v-able/assets/v-able-logo.svg" width="15%"> 

# v • able server

## Live App
#### [v•able Demo](v.able.joshyoung.net)

<p float="left"><img src="http://joshyoung.net/v-able/mobilescreenshots/landing-screenshot.png" width="20%">  <img src="http://joshyoung.net/v-able/mobilescreenshots/recruit-screenshot.png" width="20%"> <img src="http://joshyoung.net/v-able/mobilescreenshots/texteditor-screenshot.png" width="20%"> <img src="http://joshyoung.net/v-able/mobilescreenshots/oppboard-screenshot.png" width="20%"> <img src="http://joshyoung.net/v-able/mobilescreenshots/details-screenshot.png" width="20%"></p>

## Description

v•able is a platform for connecting experienced volunteers to non-profit organizations that have a specific need for skilled labor or professional services and are having a hard time finding them on the open market. 

## Author's Notes
This fully responsive app was built during my time in Thinkful's full-stack bootcamp. This project was built in approximately 4 weeks while I was working full time and taking care of twin toddlers. Talk about multi-tasking.

#####Some notes on the build:
- The app's design and CSS was scratch built - no templates, no bootstrap
- The app utilizes JSON Web Tokens and bCrypt hashing for auth & auth. I know that from a security standpoint, this isn't a fool proof system. In terms of a learning experience, however, I couldn't have asked for better.
- I implemented a number of features that are relatively 'sight unseen' to make the app more user friendly and to push my understanding of real world applications: 
  - Error "toast" notifications for server errors
  - Regex validation on zipcode, email and password inputs
  - Intuitive redirects with a dynamic "success" page to keep things user friendly
  - Authorization dynamically affects the app depending on whether the user is logged in and, once logged in, the type of user.
  - A 404 page notifies a user when the path is invalid.
  - A hamburger on mobile devices helps declutter the nav bar.
    

## Features to come

- A way for organizations users to see and edit their profiles and posted opportunities. 
- A way for volunteer users to see and edit their profiles and the jobs they've applied for.
- A system for volunteers to save opportunities to a list of favorites.
- A way for volunteer users to add a profile with resumes and a way for organizations to see a volunteer applicant's information.
- Categories for volunteer opportunities so that potential applicants can filter by skillset or organization type.
- A system to store and present volunteers' applications.
- Full text search for the opportunity board using something like PostgreSQL's native tsvector / tsquery.
- Break longer forms up into multiple pages to reduce "form fatigue."
- See a map of volunteer jobs.

## Getting Started

Install dependencies `npm install`
Start the application `npm start`
Test the application `npm test`
Build the application for production `npm run build`

## Built With

[PostgreSQL](https://www.postgresql.org/)

[Express](https://expressjs.com/)

[React](https://reactjs.org/)

[Node](https://nodejs.org/en/)

HTML 5

CSS 3

Javascript

[Jodit Text Editor](https://github.com/jodit/jodit-react)

[Jest](https://jestjs.io/)

[Enzyme](https://enzymejs.github.io/enzyme/)


## The Author

**Josh Young** - [Portfolio](https://joshyoung.net)

## License

This project is licensed under the MIT License

## Acknowledgments

* [Daniel Eden](https://daneden.github.io/animate.css/) - for some really clean and amazing css animations used for the hamburger menu.

* [Jessie Couch](https://codepen.io/designcouch/pen/Atyop) - who's hamburger button animation saved me a lot of work reinventing the 'x' shaped wheel.

