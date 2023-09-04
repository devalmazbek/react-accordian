import { useState } from "react";
import AccordionItem from "../accordion-item/accordion-item";
import { faqs } from "../../data/data";

function Accordian() {
  const [isVisibleContent, setIsVisibleContent] = useState(null);
  return (
    <div className="accordion">
      {faqs.map((item, number) => {
        return (
          <AccordionItem
            item={item}
            key={number}
            number={number}
            isVisibleContent={isVisibleContent}
            onOpen={setIsVisibleContent}
          >
            {item.text}
          </AccordionItem>
        );
      })}
    </div>
  );
}

export default Accordian;
