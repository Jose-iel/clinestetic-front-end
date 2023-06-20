import { IBanner } from './interfaces';
import * as S from './style';

export default function Banner({ options, children }: IBanner) {
  return (
    <S.Banner
      options={{
        background: options?.background,
        css: options?.css
      }}
    >
      <S.Wrap maxWidth={options?.contentWidth}>{children}</S.Wrap>
    </S.Banner>
  );
}
