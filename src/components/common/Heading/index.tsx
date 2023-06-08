import { IHeading } from './interfaces';
import * as S from './style';

export default function Heading({ title, subtitle, paragraph }: IHeading) {
  return (
    <>
      <S.Title
        as={title?.as || 'h1'}
        options={{
          size: title?.size
        }}
        css={title?.css}
      >
        {title?.text}
      </S.Title>
      <S.Subtitle
        options={{
          size: subtitle?.size
        }}
        css={subtitle?.css}
      >
        {subtitle?.text}
      </S.Subtitle>
      <S.Paragraph
        options={{
          size: paragraph?.size
        }}
        css={paragraph?.css}
      >
        {paragraph?.text}
      </S.Paragraph>
    </>
  );
}
