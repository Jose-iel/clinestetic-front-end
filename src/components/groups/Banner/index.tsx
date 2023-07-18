import { IBanner } from './interfaces';
import * as S from './style';

export default function Banner({
  background,
  styled,
  contentWidth,
  children
}: IBanner) {
  return (
    <S.Banner background={background} css={styled}>
      <S.Wrap maxWidth={contentWidth}>{children}</S.Wrap>
    </S.Banner>
  );
}
