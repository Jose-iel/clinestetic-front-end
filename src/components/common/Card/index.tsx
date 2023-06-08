import { ICard } from './interfaces';
import * as S from './style';

export default function Card({ options, children }: ICard) {
  const op = options;

  return (
    <S.Card
      options={{
        rounded: op?.rounded,
        css: op?.css
      }}
    >
      {children}
    </S.Card>
  );
}
