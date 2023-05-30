import React from 'react';

interface PersonalCardProps {
  className?: string;
}

const PersonalCard: React.FC<PersonalCardProps> = ({ className }) => {
  const name = 'Romina Manzano';
  const title = 'Systems Engineer & Frontend Web Developer';

  return (
    <div className={className}>
      <h1>{name}</h1>
      <h2>{title}</h2>

      <p>
        Back in 2008, when I was in high school, I took my first steps on web development
        learning about HTML and CSS. Fast-forward to today, I&apos;ve had the privilege of being
        part of several projects ranging from small SPAs to multiplatform experiences, working
        with both start-ups and larger companies.
      </p>

      <p>
        Nowadays, my main focus is on learning new skills, deepening the ones I&apos;ve already have
        and improving the performance of frontend applications.
      </p>
    </div>
  )
};

export default PersonalCard;
