import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';

import Header from '.';

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn()
  }))
}));

describe('Header', () => {
  it('should render Header component', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );

    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
