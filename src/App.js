import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Here we are mounting the function for the first time.
    // the Timeout function will return the id which we will use in the unmounting phase to clear the call.
    let id = setTimeout(() => {
      console.log(`Mounting for the counter value ${counter}`);
    }, 3000);
    return () => {
      // Here we are clearing the call for the mounting phase.
      // Right now we don't have any ID so we are displaying the console log
      console.log(
        `Un-Mounting for the counter value ${counter} and clearing the timeout call for id ${id}`
      );
      clearInterval(id);
    };
  }, [counter]);
  return (
    <div className="App">
      <h3>Counter : {counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </div>
  );
}
