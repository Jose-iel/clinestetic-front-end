import styled from 'styled-components';
import { theme } from 'styles/theme';

const { radii, space, colors } = theme;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${colors?.main.primary.default};
  svg {
    position: absolute;
  }
`;

export const LabelText = styled.div`
  margin-bottom: ${space && space[8]};
`;

export const Wrap = styled.div<{
  position?: string;
}>`
  position: relative;
  width: 100%;
  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    ${(props) => {
      switch (props?.position) {
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
  }
`;

export const Input = styled.input<{
  variant: string;
  rounded?: boolean;
  position?: 'left' | 'right';
}>`
  outline: none;
  border: 1px solid transparent;
  width: 100%;
  padding: ${(props) =>
    props?.position === 'right' ? '1rem 1.5rem' : '1rem 2.5rem'};
  border-radius: ${(props) =>
    props?.rounded ? `${radii && radii[52]}` : `${radii && radii[4]}`};

  ${(props) => {
    switch (props?.variant) {
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
