import React, { Dispatch, SetStateAction } from 'react';

export interface MenuItem {
  id: string;
  title: string;
  component: React.ReactNode;
}

interface MenuCardProps {
  className?: string;
  items: MenuItem[];
  onMenuChange: Dispatch<SetStateAction<MenuItem>>;
}

const MenuCard: React.FC<MenuCardProps> = ({
  className,
  items,
  onMenuChange,
}) => (
  <div className={className}>
    <ul>
      {items.map(item => (
        <li
          key={item.id}
          className="text-light-salmon-pink"
          onClick={() => onMenuChange(item)}
        >
          {item.title}
        </li>
      ))}
    </ul>
  </div>
);

export default MenuCard;
