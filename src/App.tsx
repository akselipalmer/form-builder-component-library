import { useState } from "react";
import AddInputBar from "./components/AddInputBar";

function App() {
  const [items, setItems] = useState<{ type: string }[]>([]);
  console.log(items);
  return (
    <div className="dark h-screen flex flex-col items-center pt-5">
      <AddInputBar setItems={setItems} />
    </div>
  );
}

export default App;
