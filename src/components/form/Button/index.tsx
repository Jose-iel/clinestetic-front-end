import * as S from './style';
import { IButton } from './interfaces';

export default function Button({ children, variant, rounded }: IButton) {
  return (
    <S.Button variant={variant} rounded={rounded} data-testid="button">
      {children}
    </S.Button>
  );
}
