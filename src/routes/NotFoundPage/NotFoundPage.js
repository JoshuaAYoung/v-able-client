import React from 'react';
import './NotFoundPage.css';

export default function NotFound() {
  return (
    <div>
      <div className="notFoundBanner">
        <h1 className="pageHeader">
          404
          <br />
          Page Not Found.
        </h1>
        <p className="pageInstructions">
          We can’t find the page you’re looking for. Please check the url.
        </p>
      </div>
      <div className="notFoundImageContainer">
        <img
          src="/assets/not-found.svg"
          alt="not found"
          className="notFoundImage"
        />
      </div>
    </div>
  );
}
