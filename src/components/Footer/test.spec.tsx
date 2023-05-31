import { render, screen } from '@testing-library/react';
import Footer from '.';

describe('<Footer />', () => {
  it('should render the text component', () => {
    render(<Footer />);

    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
});
