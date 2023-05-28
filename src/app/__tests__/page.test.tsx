import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Home from '../page';

describe('Home', () => {
  it('should render "my portfolio" text', () => {
    render(<Home />);
    const getStartedText = screen.getByText(/My Portfolio/i);
    expect(getStartedText).toBeInTheDocument();
  });
});
