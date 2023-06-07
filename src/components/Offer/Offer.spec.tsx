import { render, screen } from '@testing-library/react';
import Offer from '.';

describe('Offer', () => {
  it('should render the text component Offer', () => {
    render(<Offer />);

    expect(
      screen.getByText('This component Offer was created!')
    ).toBeInTheDocument();
  });
});
