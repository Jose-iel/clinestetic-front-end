import Card from 'components/common/Card';

import * as S from './style';

export default function Banner() {
  return (
    <S.Banner>
      <S.Wrap maxWidth="68.75rem">
        <S.TextWrap>
          <S.Title>Somos a Clinestetic</S.Title>
          <S.SubTitle>
            Sistema que te proporciona uma ampliação de beleza e bem estar mais
            perto de você.
          </S.SubTitle>
          <S.TextBottom>
            Nosso objetivo de promover a saúde e o bem-estar físico e estético e
            mais!
          </S.TextBottom>
        </S.TextWrap>
        <Card />
      </S.Wrap>
    </S.Banner>
  );
}
