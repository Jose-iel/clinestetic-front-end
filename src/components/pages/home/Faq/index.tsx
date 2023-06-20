import React, { useContext } from 'react';
import { IoMdClose, IoIosArrowDown } from 'react-icons/io';

import Accordion from 'components/common/Accordion';
import Heading from 'components/common/Heading';
import DataContext from 'contexts/data.context';
import { IResponseCms } from 'pages/interfaces';
import { css, useTheme } from 'styled-components';
import { Theme } from 'styles/interfaces';
import { Container } from 'styles/layout';

import * as S from './style';

export default function Faq() {
  const cms = useContext<IResponseCms>(DataContext);
  const theme: Theme = useTheme();
  const { colors, fontSizes } = theme;

  if (!cms) return null;

  return (
    <S.Faq>
      <Container>
        <S.FaqWrap>
          <S.FaqText>
            <Heading
              title={{
                as: 'h2',
                size: `${fontSizes && fontSizes[30]}`,
                text: `${cms.home?.faq?.title}`,
                css: css`
                  margin-bottom: 2rem;
                `
              }}
              subtitle={{
                as: 'h3',
                text: `${cms.home?.faq?.subtitle}`,
                size: `${fontSizes && fontSizes[18]}`,
                css: css`
                  color: ${colors?.dark[400]};
                  margin-bottom: 1rem;
                `
              }}
              paragraph={{
                text: `${cms.home?.faq?.paragraph}`,
                size: `${fontSizes && fontSizes[15]}`,
                css: css`
                  color: ${colors?.dark[400]};
                `
              }}
            />
          </S.FaqText>
          <S.FaqAccordion>
            <Accordion
              data={{
                items: cms.home?.accordion,
                feedback: {
                  enabled: true,
                  iconClosed: <IoIosArrowDown size={18} />,
                  iconOpened: <IoMdClose size={18} />
                }
              }}
            />
          </S.FaqAccordion>
        </S.FaqWrap>
      </Container>
    </S.Faq>
  );
}
