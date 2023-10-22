const Header = ({
  handleSwitch,
  mode,
}: {
  handleSwitch: (number: number) => void;
  mode: string;
}) => {
  const check =
    mode === "red"
      ? "#d03f2f"
      : "" || mode === "orange"
      ? "#ca5502"
      : "#ca5502" || mode === "aqua"
      ? "#00e0d1"
      : "";
  const adder = mode === "orange" ? 20 : 0 || mode === "aqua" ? 40 : 0;

  return (
    <header className="flex justify-between items-center mb-8">
      <h1 className="text-[40px] text-[#eae3dc] tracking-wider">calc</h1>
      <div>
        <div className="flex items-end gap-3">
          <h2 className="text-sm text-[#eae3dc] font-thin tracking-wider">
            THEME
          </h2>
          <div>
            <span className="flex gap-2 justify-evenly text-white text-sm text-center">
              {[1, 2, 3].map((number) => (
                <p
                  onClick={() => handleSwitch(number)}
                  className="h-12 mb-[-25px] z-10 hover:cursor-pointer w-4"
                  key={number}
                >
                  {number}
                </p>
              ))}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="26"
              viewBox="0 0 64 22"
              fill="none"
            >
              <rect y="1" width="64" height="23" rx="10" fill="#232c43" />
              <circle
                className="duration-300"
                cx={`${12 + adder}`}
                cy="12"
                r="8"
                fill={check}
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
