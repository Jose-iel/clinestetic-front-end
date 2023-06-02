import styled from 'styled-components';
import {
  position,
  flexbox,
  space,
  layout,
  color,
  grid,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  GridProps
} from 'styled-system';

interface BoxProps
  extends LayoutProps,
    SpaceProps,
    FlexboxProps,
    PositionProps,
    GridProps {}

export const Box = styled.div<BoxProps>`
  ${flexbox}
  ${layout}
  ${space}
  ${position}
  ${color}
  ${grid}
`;

export const Container = styled.div<BoxProps>`
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 1rem;

  ${flexbox}
  ${layout}
  ${space}
  ${position}
`;
