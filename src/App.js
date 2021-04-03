import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // If we don't have an Id. we can make a local boolean variable and set it to true.
    // Only do stuff id the value is true.
    let currentRender = true;
    setTimeout(() => {
      currentRender
        ? console.log(`Mounting final counter value ${counter}`)
        : console.log("NOTHING");
    }, 3000);
    return () => {
      // Setting the value to false which mean the component is unmounted.
      currentRender = false;
      console.log(
        `Un-Mounting for the counter value ${counter} and aborting call for id ${currentRender}`
      );
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
