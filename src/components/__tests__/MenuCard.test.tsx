import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import MenuCard, { MenuItem } from '../MenuCard';

describe('<MenuCard />', () => {
  const items: MenuItem[] = [
    { id: '1', title: 'Item 1', component: 'Item 1' },
    { id: '2', title: 'Item 2', component: 'Item 2' },
    { id: '3', title: 'Item 3', component: 'Item 3' },
  ];

  const onMenuChange = jest.fn();

  const renderMenuCard = () => render(<MenuCard items={items} onMenuChange={onMenuChange} />);

  it('should rendes the list of items', () => {
    const { getByText } = renderMenuCard();
    expect(getByText('Item 1')).toBeInTheDocument();
    expect(getByText('Item 2')).toBeInTheDocument();
    expect(getByText('Item 3')).toBeInTheDocument();
  });

  it('should call the onMenuChange callback when an item is clicked', () => {
    const { getByText } = renderMenuCard();
    fireEvent.click(getByText('Item 2'));
    expect(onMenuChange).toHaveBeenCalledWith(items[1]);
  });
});
