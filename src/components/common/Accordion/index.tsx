import { useState } from 'react';
import { ReactNode } from 'react';

import { Accordion as AccordionRoot } from '@radix-ui/react-accordion';
import { StyledProps } from 'styles/interfaces';

import * as S from './style';

export type AccordionProps = {
  id: number;
  title: string;
  description: string;
};

export type AccordionState = {
  [key: number]: boolean;
};

export interface IAccordion {
  data: {
    items?: AccordionProps[];
    icon?: {
      closed?: ReactNode;
      opened?: ReactNode;
      custom?: ReactNode;
    };
    styled?: StyledProps;
  };
}

export default function Accordion({ data }: IAccordion) {
  const [isOpen, setIsOpen] = useState<AccordionState>({});

  const handleToggle = (index: number) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <AccordionRoot type="multiple">
      {data?.items?.map((item: AccordionProps, index: number) => (
        <S.AccordionItem
          key={item?.id}
          value={`item-${item.id}`}
          css={data.styled}
        >
          <S.AccordionTrigger onClick={() => handleToggle(index)}>
            <S.AccordionTitle>{item.title}</S.AccordionTitle>
            {data?.icon && (
              <span>
                {isOpen[index] ? data?.icon?.opened : data?.icon?.closed}
              </span>
            )}
            {data?.icon?.custom}
          </S.AccordionTrigger>
          {item.description && (
            <S.AccordionContent asChild>
              <div dangerouslySetInnerHTML={{ __html: item.description }} />
            </S.AccordionContent>
          )}
        </S.AccordionItem>
      ))}
    </AccordionRoot>
  );
}
