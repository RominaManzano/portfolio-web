import React from 'react';
import dayjs from 'dayjs';

const Footer = () => (
  <footer className="absolute bottom-0 w-full flex justify-center">
    <div>
      &#169; {dayjs().year()} Romina Manzano
    </div>
  </footer>
);

export default Footer;