import { useEffect, useState } from "react";
import Main from "./components/Main";

function App() {
  const [mode, setMode] = useState("red");
  const storage = localStorage.getItem("mode");

  // if (storage !== null) {
  //   localStorage.setItem("mode", "red");
  // }

  useEffect(() => {
    storage && setMode(storage);
  }, []);

  const handleSwitch = (number: number) => {
    switch (number) {
      case 1:
        localStorage.removeItem("mode");
        localStorage.setItem("mode", "red");
        setMode("red");
        break;
      case 2:
        localStorage.removeItem("mode");
        localStorage.setItem("mode", "orange");
        setMode("orange");
        break;
      case 3:
        localStorage.removeItem("mode");
        localStorage.setItem("mode", "aqua");
        setMode("aqua");
        break;
    }
  };

  return (
    <>
      <Main handleSwitch={handleSwitch} mode={mode} />
    </>
  );
}

export default App;
