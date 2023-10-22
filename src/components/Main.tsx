import { useState } from "react";
import items from "../components/Items";
import Header from "./Header";

const Main = ({
  handleSwitch,
  mode,
}: {
  handleSwitch: (number: number) => void;
  mode: string;
}) => {
  const [expression, setExpression] = useState("");
  const operators = ["+", "-", "/", "*"];

  const handleClicks = (value: string) => {
    if (expression === "Error" && value !== "RESET" && value !== "DEL") {
      return;
    }
    if (value === "DEL") {
      setExpression(expression.slice(0, -1));
    } else if (value === "RESET") {
      setExpression("");
    } else if (value === "=") {
      try {
        const result = eval(expression);
        setExpression(result.toString());
      } catch (error) {
        if (expression.length < 1) return;
        setExpression("Error");
      }
    } else {
      setExpression(expression + value);
    }
  };

  const handleOperators = (value: string) => {
    if (operators.includes(value)) {
      // Replace multiple operators with the most recent one
      setExpression((prevExpression) =>
        prevExpression.replace(/[-+/*]+$/, value)
      );
    }
  };

  return (
    <main>
      <Header handleSwitch={handleSwitch} mode={mode} />
      <div className="bg-[#182034] text-right rounded-[10px] px-6 py-5 text-[32px] h-[88px] md:text-[42px] md:py-6 md:h-[111px]">
        <p className={`f-${mode}`}>{expression}</p>
      </div>
      <div className="grid grid-cols-4 gap-[10px] p-7 bg-[#232c43] rounded-[10px] mt-4 md:gap-5">
        {items.map((value, index) => (
          <button
            onClick={() => {
              handleClicks(value);
              handleOperators(value);
            }}
            key={index}
            className={`${
              value === "DEL" || value === "RESET"
                ? "text-xl md:text-2xl"
                : "text-3xl md:text-4xl"
            } ${
              value === "RESET" || value === "DEL" || value === "="
                ? "bg-[#637097] border-b-[#404E73] text-white"
                : "bg-[#eae3dc] border-b-[#b4a597]"
            } ${
              value === "=" ? "bg-[#d03f2f] border-b-[#93261a] text-white" : ""
            } ${
              value === "RESET" || value === "="
                ? "text-[23px] col-span-2 mt-3"
                : ""
            } rounded border-b-4 text-[#444b5a] px-[15px] pb-2 pt-3 md:px-[29.8px] md:rounded-[10px] hover:brightness-75 active:scale-95`}
          >
            {value}
          </button>
        ))}
      </div>
    </main>
  );
};

export default Main;
