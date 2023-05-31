import { render, screen } from '@testing-library/react';
import Footer from '.';

describe('Footer', () => {
  it('should render the text component Footer', () => {
    render(<Footer />);

    expect(
      screen.getByText('This component Footer was created!')
    ).toBeInTheDocument();
  });
});
