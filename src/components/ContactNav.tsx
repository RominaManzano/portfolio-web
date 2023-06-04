import Link from 'next/link';
import React from 'react';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

const githubUrl = process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL || '';
const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_PROFILE_URL || '';
const iconSize = 32;

const ContactNav = () => (
  <nav className="flex justify-end">
    <div className="flex justify-end p-4 gap-2 w-3/12 border-b-2 border-light-coral">
      <Link href={githubUrl} target="_blank" aria-label="GitHub">
        <FaGithub
          size={iconSize}
          className="text-light-coral"
        />
      </Link>

      <Link href={linkedinUrl} target="_blank" aria-label="LinkedIn">
        <FaLinkedin
          size={iconSize}
          className="text-light-coral"
        />
      </Link>
    </div>
  </nav>
);

export default ContactNav;
