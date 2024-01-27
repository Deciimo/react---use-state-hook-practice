import React, {useState} from "react";

function App() {
  setInterval(countdown, 1000);

  const currentTime = new Date().toLocaleTimeString();

  const [cTime, setTime] = useState(currentTime);

  function countdown() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  return (
    <div className="container">
      <h1>{cTime}</h1>
      <button onClick={countdown} >Get Time</button>
    </div>
  );
}

export default App;
