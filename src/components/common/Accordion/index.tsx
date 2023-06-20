import { useState } from 'react';

import { Accordion as AccordionRoot } from '@radix-ui/react-accordion';

import { IAccordion, AccordionState, AccordionProps } from './interfaces';
import * as S from './style';

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
        <S.AccordionItem key={item?.id} value={`item-${item.id}`}>
          <S.AccordionTrigger onClick={() => handleToggle(index)}>
            {item.title}
            {data?.feedback && (
              <span>
                {isOpen[index]
                  ? data?.feedback?.iconOpened
                  : data?.feedback?.iconClosed}
              </span>
            )}
            {data?.feedback?.custom}
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
