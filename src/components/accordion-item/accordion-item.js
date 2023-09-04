function AccordionItem({
  item: { title },
  number,
  isVisibleContent,
  onOpen,
  children,
}) {
  const currentOpen = number === isVisibleContent;
  function handleToggle() {
    onOpen(currentOpen ? null : number);
  }

  const style = `item ${currentOpen ? "open" : ""}`;

  return (
    <div className={style} onClick={handleToggle}>
      <p className="number">{number < 9 ? `0${number + 1}` : number + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{currentOpen ? "-" : "+"}</p>
      {currentOpen ? <div className="content-box">{children}</div> : null}
    </div>
  );
}

export default AccordionItem;
