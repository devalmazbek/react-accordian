import AccordianItem from "../accordion-item/accordion-item";
import { faqs } from "../../data/data";

function Accordian() {
  let number = 1;
  return (
    <div className="accordion">
      {faqs.map((item, number) => {
        return <AccordianItem item={item} key={number} number={number} />;
      })}
    </div>
  );
}

export default Accordian;
