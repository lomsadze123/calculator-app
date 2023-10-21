import items from "../components/Items";

const Main = () => {
  return (
    <main className="calculator">
      <div className="display">display</div>
      <div className="grid grid-cols-4 gap-[10px]">
        {items.map((value, index) => (
          <button
            key={index}
            className={`${
              value === "RESET" || value === "=" ? "col-span-2" : ""
            }`}
          >
            {value}
          </button>
        ))}
      </div>
    </main>
  );
};

export default Main;
