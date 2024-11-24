import Button from "./componets/Button/Button";
import CardButton from "./componets/CardButton/CardButton";
import JournalItem from "./componets/JournalItem/JournalItem";
import Header from "./componets/Header/Header";
import JournalAddButton from "./componets/JournalAddButton/JournalAddButton";
import JournalList from "./componets/Journallist/Journallist";
import LeftPanel from "./Layouls/Body/LeftPanel/LeftPanel";
import Body from "./Layouls/Body/Body/Body";
import JournalFrom from "./componets/JournalFrom/JournalFrom";
import { useState } from "react";

// const data = [
//   {
//     title: "Подготовка к обновлению курсов",
//     text: "Сегодня провёл весь день за...",
//     date: new Date(),
//     id: "1",
//   },

//   {
//     title: "Поход в горы",
//     text: "Думал, что очень много времени",
//     date: new Date(),
//     id: "2",
//   },
// ];

function App() {
  const [itmes, setItems] = useState([]);

  const addItem = (item) => {
    setItems((oldItems) => [
      ...oldItems,
      {
        text: item.text,
        title: item.title,
        date: new Date(),
        id: Math.floor(Math.random() * 1000),
      },
    ]);
  };

  return (
    <div className="app">
      <LeftPanel>
        <Header />

        <JournalAddButton />

        <JournalList items={itmes} />
      </LeftPanel>

      <body>
        <JournalFrom onSubmit={addItem} />
      </body>
    </div>
  );
}

export default App;
