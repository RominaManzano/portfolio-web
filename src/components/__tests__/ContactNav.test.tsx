import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import ContactNav from '../ContactNav';

describe('<ContactNav />', () => {
  it('should render two clickable social media icons', () => {
    const { getByRole } = render(<ContactNav />);

    const githubIcon = getByRole('link', { name: 'GitHub' });
    expect(githubIcon).toBeVisible();
    userEvent.click(githubIcon);

    const linkedinIcon = screen.getByRole('link', { name: 'LinkedIn' });
    expect(linkedinIcon).toBeVisible();
    userEvent.click(linkedinIcon);
  });
});
