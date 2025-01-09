import { useState } from "react";
import AddInputBar from "./components/AddInputBar";

import { field } from "../types";
import DisplayItems from "./components/DisplayItems";

function App() {
  const [items, setItems] = useState<field[]>([]);

  return (
    <div className="dark h-screen flex flex-col items-center pt-5 px-3">
      <AddInputBar setItems={setItems} />
      <DisplayItems items={items} />
    </div>
  );
}

export default App;
