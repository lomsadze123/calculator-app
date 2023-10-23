import { useEffect, useState } from "react";
import Main from "./components/Main";

function App() {
  const [mode, setMode] = useState("red");
  const storage = localStorage.getItem("mode");

  useEffect(() => {
    storage && setMode(storage);
  }, []);

  const colors = ["red", "orange", "aqua"];

  const handleSwitch = (number: number) => {
    if (number >= 1 && number <= colors.length) {
      const selectedColor = colors[number - 1];
      localStorage.setItem("mode", selectedColor);
      setMode(selectedColor);
    }
  };

  return (
    <div
      className={`bg-${mode} w-full min-h-screen flex justify-center items-center`}
    >
      <Main handleSwitch={handleSwitch} mode={mode} />
    </div>
  );
}

export default App;
