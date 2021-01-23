import "./App.css";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() =>
          dispatch({ type: "INCREMENT", payload: { teste: "teste" } })
        }
      >
        Add
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Sub</button>
    </div>
  );
}

export default App;
