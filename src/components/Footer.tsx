import React from 'react';
import dayjs from 'dayjs';

const Footer = () => (
  <footer className="flex justify-center">
    <div>
      &#169; {dayjs().year()} Romina Manzano
    </div>
  </footer>
);

export default Footer;