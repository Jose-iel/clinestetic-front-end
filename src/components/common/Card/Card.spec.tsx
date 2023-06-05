import { render, screen } from '@testing-library/react';

import Card from '.';

describe('Card', () => {
  xit('should render the text component Card', () => {
    render(<Card />);

    expect(
      screen.getByText('This component Card was created!')
    ).toBeInTheDocument();
  });
});
