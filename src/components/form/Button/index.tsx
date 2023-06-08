import { IButton } from './interfaces';
import * as S from './style';

export default function Button({ options, hasIcon, children }: IButton) {
  const op = options;
  return (
    <S.Button
      options={{
        variant: op?.variant || 'primary',
        size: op?.size || 'md',
        width: op?.width || '10%',
        height: op?.height,
        rounded: op?.rounded,
        css: op?.css,
        hasIcon
      }}
    >
      {children}
    </S.Button>
  );
}
