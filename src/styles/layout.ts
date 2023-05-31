import styled from 'styled-components';
import {
  position,
  flexbox,
  space,
  layout,
  color,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps
} from 'styled-system';

interface BoxProps
  extends LayoutProps,
    SpaceProps,
    FlexboxProps,
    PositionProps {}

export const Box = styled.div<BoxProps>`
  ${flexbox}
  ${layout}
  ${space}
  ${position}
  ${color}
`;

export const Container = styled.div<BoxProps>`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  ${flexbox}
  ${layout}
  ${space}
  ${position}
`;
