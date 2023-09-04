import { useState } from "react";

function AccordianItem({ item: { title, text }, number }) {
  const [isVisibleContent, setIsVisibleContent] = useState(false);

  function handleToggle() {
    setIsVisibleContent((isVisibleContent) => !isVisibleContent);
  }

  const style = `item ${isVisibleContent ? "open" : ""}`;

  return (
    <div className={style} onClick={handleToggle}>
      <p className="number">{number < 9 ? `0${number + 1}` : number + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isVisibleContent ? "-" : "+"}</p>
      {isVisibleContent ? <div className="content-box">{text}</div> : null}
    </div>
  );
}

export default AccordianItem;
