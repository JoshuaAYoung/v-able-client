import React from 'react';

export default function Footer() {
  function generateCopyright() {
    let d = new Date();
    let year = d.getFullYear();
    return year;
  }

  return (
    <footer className='copyright'>
      <p>
        Copyright &copy; {generateCopyright()}
        <a href='https://joshyoung.net' target='_blank' rel='noopener noreferrer' className='boldLink'>Josh Young</a>
      </p>
    </footer>
  );
}
