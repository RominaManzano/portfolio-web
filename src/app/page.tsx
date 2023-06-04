'use client'

import { useState } from 'react';

import ContactNav from '@/components/ContactNav';
import Footer from '@/components/Footer';
import MenuCard, { MenuItem } from '@/components/MenuCard';
import PersonalCard from '@/components/PersonalCard';

const containerClasses = 'bg-gradient-to-br from-raisin-black via-black-coffee to-light-coral h-screen';
const mainClasses = 'h-[80%] flex justify-between p-8 gap-4 bg-developer-graph bg-no-repeat bg-[length:450px] bg-origin-content bg-right-bottom';
const informationClassName = 'flex-1';
const menuClassName = 'flex-none w-64';

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
    <div className={containerClasses}>
      <ContactNav />
      <main className={mainClasses}>
        <MenuCard
          className={menuClassName}
          items={menuItems}
          onMenuChange={setSelectedSection}
        />
        {selectedSection.component}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
