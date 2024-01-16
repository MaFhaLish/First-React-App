import { useEffect, useState } from "react";
import ItemsList from "./components/ItemsList";
import Message from "./components/Message";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    return async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      setData(data);
    };
  }, []);

  const [show, setShow] = useState(false);

  return (
    <>
      <Message />
      <button onClick={() => setShow(!show)}>
        {show ? "Hide List" : "Show List"}
      </button>

      {show ? (
        <ItemsList todoData={data} />
      ) : (
        <h3>Click in Button To Fetch List</h3>
      )}
    </>
  );
}

export default App;
