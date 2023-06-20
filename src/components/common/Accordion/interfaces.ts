import { ReactNode } from 'react';

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
    feedback?: {
      enabled: boolean;
      iconClosed?: ReactNode;
      iconOpened?: ReactNode;
      custom?: ReactNode;
    };
  };
}
