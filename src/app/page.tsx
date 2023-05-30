'use client'

import { useState } from 'react';

import ContactNav from '@/components/ContactNav';
import Footer from '@/components/Footer';
import MenuCard, { MenuItem } from '@/components/MenuCard';
import PersonalCard from '@/components/PersonalCard';

const mainClasses = 'flex min-h-screen justify-between p-8 gap-4';
const informationClassName = 'flex-1';
const menuClassName = 'flex-1';

const menuItems: MenuItem[] = [
  {
    id: 'ABOUT',
    title: 'About',
    component: <PersonalCard className={informationClassName} />,
  },
  {
    id: 'EXPERIENCE',
    title: 'Experience',
    component: <div className={informationClassName}>Experience</div>,
  },
  {
    id: 'PROJECTS',
    title: 'Projects',
    component: <div className={informationClassName}>Projects</div>,
  },
  {
    id: 'CONTACT',
    title: 'Contact',
    component: <div className={informationClassName}>Contact</div>,
  },
];

const Home = () => {
  const [selectedSection, setSelectedSection] = useState(menuItems[0]);

  return (
    <>
      <ContactNav />
      <main className={mainClasses}>
        {selectedSection.component}
        <MenuCard
          className={menuClassName}
          items={menuItems}
          onMenuChange={setSelectedSection}
        />
      </main>
      <Footer />
    </>
  );
};

export default Home;
