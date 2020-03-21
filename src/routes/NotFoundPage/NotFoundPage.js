import React, { Component } from 'react';

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <img src='http://placekitten.com/400/500' alt='random cat' />
        <p className='404'>404 ERROR - PAGE NOT FOUND</p>
      </div>
    );
  }
}
