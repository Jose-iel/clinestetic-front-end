import { IFieldCustom } from './interfaces';
import * as S from './style';

export default function FieldCustom({ options }: IFieldCustom) {
  const op = options;

  return (
    <S.Label>
      <S.LabelText>{op?.label?.text}</S.LabelText>
      <S.Wrap position={op?.iconPosition || 'right'}>
        {op?.iconElement && op?.iconElement}

        <S.Input
          id={op?.id}
          name={op?.name}
          placeholder={op?.placeholder || 'Digite neste campo'}
          variant={op?.variant || 'primary'}
          rounded={op?.rounded}
          position={op?.iconPosition || 'right'}
        />
      </S.Wrap>
    </S.Label>
  );
}
