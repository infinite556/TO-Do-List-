import { useState } from "react";
import Logo from "./logo";
import Form from "./form";
import PackingList from "./packongList";
import Stats from "./stats";
export default function App() {
  const [items, setItems] = useState([]);
  function handelAddItem(item) {
    setItems((items) => [...items, item]);
  }
  function handelDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handelCheckedItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handelClearList() {
    if (items.length > 0) {
      const confirm = window.confirm(
        "are you sure you want to delete all items ? "
      );
      if (confirm) setItems([]);
    }
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handelAddItem} onDeleteItem={handelDeleteItems} />
      <PackingList
        items={items}
        onDeleteItem={handelDeleteItems}
        onCheckedItem={handelCheckedItems}
        onClearItem={handelClearList}
      />
      <Stats items={items} />
    </div>
  );
}
