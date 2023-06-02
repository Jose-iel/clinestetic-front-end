import { render, screen } from '@testing-library/react';
import Header from '.';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';

describe('Header', () => {
  it('should render Header componet', () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );

    expect(screen.getByTestId('header-component')).toBeInTheDocument();
  });
});
