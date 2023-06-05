import { render, screen } from '@testing-library/react';

import Banner from '.';

describe('Banner', () => {
  xit('should render the text component Banner', () => {
    render(<Banner />);

    expect(
      screen.getByText('This component Banner was created!')
    ).toBeInTheDocument();
  });
});
