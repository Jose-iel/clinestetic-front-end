import React from 'react';
import { IoMdClose, IoIosArrowDown } from 'react-icons/io';

import Accordion from 'components/common/Accordion';
import Heading from 'components/common/Heading';
import Text from 'components/common/Text';
import * as CSS from 'styles/components/faq';
import { Container } from 'styles/layout';
import { accordion } from 'utilities/data';

import * as S from './style';

export default function Faq() {
  return (
    <S.Faq>
      <Container>
        <S.FaqWrap>
          <S.FaqText>
            <Heading
              primary={{
                as: 'h2',
                content: 'Dúvidas',
                css: CSS.FaqTitle
              }}
              secondary={{
                as: 'h3',
                content: 'Como podemos te ajudar?',
                css: CSS.FaqSubtitle
              }}
            />
            <Text styled={CSS.FaqText}>
              Selecione a categoria da sua dúvida ou tente uma palavra-chave.
            </Text>
          </S.FaqText>
          <S.FaqAccordion>
            <Accordion
              data={{
                items: accordion,
                icon: {
                  opened: <IoMdClose size={18} />,
                  closed: <IoIosArrowDown size={18} />
                }
              }}
            />
          </S.FaqAccordion>
        </S.FaqWrap>
      </Container>
    </S.Faq>
  );
}
