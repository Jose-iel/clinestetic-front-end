import { render, screen } from '@testing-library/react';
import Header from '.';

describe('Header', () => {
  xit('should render the text component Header', () => {
    render(<Header />);

    expect(
      screen.getByText('This component Header was created!')
    ).toBeInTheDocument();
  });
});
