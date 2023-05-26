import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Home from '../page';

describe('Home', () => {
  it('should render get started text', () => {
    render(<Home />);
    const getStartedText = screen.getByText(/get started by editing/i);
    expect(getStartedText).toBeInTheDocument();
  });

  it('should render Next.js logo', () => {
    render(<Home />);
    const nextLogo = screen.getByAltText(/Next\.js Logo/i);
    expect(nextLogo).toBeInTheDocument();
  });

  it('should render all four links', () => {
    render(<Home />);
    const docsLink = screen.getByRole('link', { name: /docs/i });
    expect(docsLink).toBeInTheDocument();

    const learnLink = screen.getByRole('link', { name: /learn/i });
    expect(learnLink).toBeInTheDocument();

    const templatesLink = screen.getByRole('link', { name: /templates/i });
    expect(templatesLink).toBeInTheDocument();

    const deployLink = screen.getByRole('link', { name: /deploy/i });
    expect(deployLink).toBeInTheDocument();
  });
});
