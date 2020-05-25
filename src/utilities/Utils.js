import React from 'react';

export function cleanDate(date) {
  const d = date ? new Date(date) : new Date();
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  const year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  return [month, day, year].join('-');
}

export function LinkName({ website, name }) {
  let link = website;
  if (link) {
    if (!website.includes('//')) {
      link = 'http://' + link;
    }
    return (
      <a
        href={link}
        alt="organization's website"
        className="orgLink"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="orgTitle">{name}</p>
      </a>
    );
  }
  return <p className="orgTitle">{name}</p>;
}

export function Required({ className, ...props }) {
  return (
    <span className={['Required', className].join(' ')} {...props}>
      &#42;
    </span>
  );
}
