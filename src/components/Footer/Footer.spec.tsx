import { render, screen } from '@testing-library/react';
import { footerMockData } from '__mocks__';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import Footer from '.';

describe('Footer', () => {
  it('should render Footer component', () => {
    render(
      <ThemeProvider theme={theme}>
        <Footer cms={footerMockData} />
      </ThemeProvider>
    );

    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(screen.getByTestId('copyright')).toBeInTheDocument();
  });
});
