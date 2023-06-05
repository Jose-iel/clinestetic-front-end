import { headerMockData } from '__mocks__';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';

import Header from '.';

describe('Header', () => {
  it('should render Header component', () => {
    render(
      <ThemeProvider theme={theme}>
        <Header cms={headerMockData} />
      </ThemeProvider>
    );

    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
