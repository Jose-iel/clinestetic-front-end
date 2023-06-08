import { ReactNode } from 'react';
import ReactSelect from 'react-select';

import styled from 'styled-components';
import { StyledProps } from 'styles/interfaces';
import { theme } from 'styles/theme';

const { radii, space, colors } = theme;

export const Label = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const LabelText = styled.label`
  margin-bottom: ${space && space[8]};
  color: ${colors?.main.primary.default};
  font-weight: 500;
`;

export const FieldWrap = styled.div<{
  marginWrapper?: string;
}>`
  position: relative;
  margin-bottom: ${({ marginWrapper }) =>
    marginWrapper ? `${marginWrapper}` : '1rem'};
`;

export const Select = styled(ReactSelect)`
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
    padding: 0.5rem 1rem 0.5rem 1.4rem;
  }
`;

export const InputWrap = styled.div`
  position: relative;
  width: 100%;
`;

export const InputIcon = styled.span<{
  position: 'right' | 'left';
}>`
  display: inline-block;
  position: absolute;
  top: 50%;
  transform: translateY(-40%);

  ${({ position }) => {
    switch (position) {
      case 'left':
        return {
          left: `${space && space[16]}`
        };
      case 'right':
        return {
          right: `${space && space[24]}`
        };
    }
  }}
`;

export const Input = styled.input<{
  variant: 'primary' | 'secondary';
  rounded: boolean;
  position: 'right' | 'left';
  textLabel?: string;
  iconElement?: ReactNode;
  iconPosition?: 'left' | 'right';
  css?: StyledProps;
}>`
  outline: none;
  border: 1px solid transparent;
  width: 100%;
  background: ${colors?.light[200]};
  border-radius: ${(props) =>
    props?.rounded ? `${radii && radii[52]}` : `${radii && radii[4]}`};
  padding: ${(props) =>
    props?.position === 'right' ? '1rem 1.5rem' : '1rem 2.5rem'};

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
`;
