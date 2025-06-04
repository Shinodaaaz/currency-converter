import type {FC, ReactNode} from "react";
import {useRef, useState} from "react";
import {AccordionContainer, Content, Item, UppContent} from "@/shared/ui/Accordion/Accordion.styles.ts";
import {useClickOutside} from "@/shared/hooks/useClickOutside.ts";

export interface IAccordionItem {
  id: string;
  uppContent: ReactNode;
  mainContent: ReactNode;
}

export interface AccordionProps {
  items: IAccordionItem[];
  defaultOpenId?: string;
}

export const Accordion: FC<AccordionProps> = ({
  items,
  defaultOpenId
}) => {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);
  const ref = useRef<HTMLDivElement>(null);
  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  useClickOutside(ref,
    () => setOpenId(null));

  return (
    <AccordionContainer ref={ref}>
      {items.map(({
        id,
        uppContent,
        mainContent
      }) => (
        <Item key={id}>
          <UppContent onClick={() => toggle(id)} $isOpen={openId === id}>
            {uppContent}
          </UppContent>
          {openId === id && <Content>{mainContent}</Content>}
        </Item>
      ))}
    </AccordionContainer>
  );
};
