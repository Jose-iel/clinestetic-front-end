import ReactSelect from 'react-select';

import styled from 'styled-components';
import { StyledProps } from 'styles/interfaces';
import { theme } from 'styles/theme';

const { radii, space, colors, fontWeight, fontSizes } = theme;

export const Label = styled.label<{
  css?: StyledProps;
}>`
  display: block;
  margin-bottom: ${space && space[8]};
  color: ${colors?.main.primary.default};
  font-weight: ${fontWeight && fontWeight.semiBold};
`;

export const FormFieldContainer = styled.div<{
  touched?: {
    [key: string]: string;
  };
}>`
  display: flex;
  justify-content: space-between;
  position: relative;
  flex-direction: column;
  position: relative;
  width: 100%;

  p {
    font-size: ${fontSizes && fontSizes[14]};
    color: ${colors?.main.accent};
    margin-left: auto;
    position: absolute;
    right: 0;
    top: -${space && space[20]};
  }
`;

export const Input = styled.input<{
  variant: 'primary' | 'secondary';
  iconPosition?: 'left' | 'right';
  css?: StyledProps;
  pill?: boolean;
}>`
  color: ${colors?.dark[300]};
  border: 1px solid;
  border-color: ${colors?.light[200]};
  border-radius: ${({ pill }) =>
    pill ? `${radii && radii[52]}` : `${radii && radii[4]}`};
  padding: ${`${space && space[20]} ${space && space[16]}`};
  width: 100%;
  margin-bottom: ${space && space[16]};
  &::placeholder {
    color: ${colors?.dark[200]};
  }
  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return {
          background: `${colors?.light[200]}`
        };
      case 'secondary':
        return {
          border: `1px solid ${colors?.dark[400]}`,
          background: `${colors?.light[100]}`
        };
    }
  }}
  ${({ iconPosition }) =>
    iconPosition === 'left'
      ? {
          paddingLeft: `${space && space[52]}`
        }
      : {
          paddingLeft: `${space && space[16]}`
        }}
  ${({ css }) => css};
`;

export const IconContainer = styled.span<{
  iconPosition?: 'left' | 'right';
  css?: StyledProps;
}>`
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-40%);
  ${({ iconPosition }) =>
    iconPosition === 'right'
      ? {
          right: `${space && space[20]}`
        }
      : {
          left: `${space && space[20]}`
        }}
  ${({ css }) => css}
`;

export const Select = styled(ReactSelect)<{
  css?: StyledProps;
}>`
  .react-select__value-container {
    padding: 0;
  }

  .react-select__indicator-separator {
    display: none;
  }

  .react-select__control {
    border: 1px solid transparent;
    background-color: ${colors?.light[200]};
    border-radius: ${radii && radii[4]};
    padding: ${`${space && space[13]} ${space && space[16]}`};
  }

  margin-bottom: ${space && space[16]};
  ${({ css }) => css};
`;
