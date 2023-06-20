import * as Accordion from '@radix-ui/react-accordion';
import styled from 'styled-components';
import { theme } from 'styles/theme';

const { colors, bp } = theme;

export const Faq = styled.section`
  padding: 4rem 0;
  background-color: ${colors?.light[200]};
`;

export const FaqWrap = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: ${bp?.lg}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FaqText = styled.div`
  max-width: 30ch;
  @media (max-width: ${bp?.lg}) {
    text-align: center;
    margin-bottom: 2.5rem;
  }
`;

export const FaqAccordion = styled.div`
  width: 52%;

  @media (max-width: ${bp?.lg}) {
    width: 90%;
  }

  @media (max-width: ${bp?.sm}) {
    width: 100%;
  }
`;

export const AccordionItem = styled(Accordion.Item)`
  margin-bottom: 1rem;
  overflow: hidden;
`;

export const AccordionTrigger = styled(Accordion.Trigger)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${colors?.light[100]};
  border-radius: 16px;
  font-weight: 700;
  color: ${colors?.dark[300]};
  width: 100%;
  text-align: left;
  padding: 2rem;

  &[aria-expanded='true'] {
    border-radius: 1rem 1rem 0 0;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 3.25rem;
    background: ${colors?.main.primary.default};

    svg {
      color: ${colors?.light[100]};
    }
  }
`;

export const AccordionContent = styled(Accordion.Content)`
  background: #ffffff;
  padding: 0 32px 32px 32px;
  border-radius: 0 0 16px 16px;
  font-size: 14px;
  line-height: 1.6;
  color: #383838;

  b {
    color: #ff1c89;
  }
`;
