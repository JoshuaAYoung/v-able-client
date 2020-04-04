import React from 'react'
import './Utils.css'

export function cleanDate(date) {
  let d = date ? new Date(date) : new Date();
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  let year = d.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;
  return [month, day, year].join('-');
}

export function LinkName({ website, name }) {
  if (website) {
    return (
      <a href={website} alt="organization's website" className='orgLink' target='_blank' rel="noopener noreferrer">
        <p className='orgTitle'>{name}</p>
      </a>
    )
  }
  else {
    return (
      <p className='orgTitle'>{name}</p>
    )
  }
}

export function Required({ className, ...props }) {
  return (
    <span className={['Required', className].join(' ')} {...props}>
      &#42;
    </span>
  )
}