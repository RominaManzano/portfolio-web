import React from 'react';
import { render } from '@testing-library/react';

import Footer from '../Footer';

describe('<Footer />', () => {
  it('renders footer text', () => {
    const { getByText } = render(<Footer />);
    const currentYear = new Date().getFullYear();
  
    expect(getByText(`© ${currentYear} Romina Manzano`)).toBeInTheDocument();
  });
});
