import { css } from 'styled-components';
import { theme } from 'styles/theme';

const { colors } = theme;

export function inputError(conditional: boolean | undefined) {
  return conditional
    ? css`
        border-color: ${colors?.main.accent};
      `
    : css`
        border-color: ${colors?.light[200]};
      `;
}
