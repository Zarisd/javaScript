import "./JournalItem.css";

export default function JournalItem({ title, text, date }) {
  const formatedDate = new Intl.DateTimeFormat("ru-Ru").format(date);
  return (
    <>
      <h2 className="journal-item_header">{title}</h2>
      <div className="Journal-item_body">
        <p className="jpurnal-item-date"> {formatedDate}</p>
        <p className="jpurnal-item-text"> {text}</p>
      </div>
    </>
  );
}
