import { IButton } from './interfaces';
import * as S from './style';

export default function Button({
  options,
  hasIcon,
  onClick,
  children
}: IButton) {
  const op = options;
  return (
    <S.Button
      onClick={onClick}
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
