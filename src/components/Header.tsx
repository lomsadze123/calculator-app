const Header = ({
  handleSwitch,
  mode,
}: {
  handleSwitch: (number: number) => void;
  mode: string;
}) => {
  const themes = [
    {
      mode: "red",
      circle: "#d03f2f",
      rect: "#232c43",
      adder: 0,
    },
    {
      mode: "orange",
      circle: "#ca5502",
      rect: "#d1cccc",
      adder: 20,
    },
    {
      mode: "aqua",
      circle: "#00e0d1",
      rect: "#1d0934",
      adder: 40,
    },
  ];

  const selectedTheme = themes.find((theme) => theme.mode === mode);

  return (
    <header className="flex justify-between items-center mb-8">
      <h1 className={`text-[40px] f-${mode}-f tracking-wider`}>calc</h1>
      <div>
        <div className="flex items-end gap-3">
          <h2 className={`text-sm f-${mode}-f font-thin tracking-wider`}>
            THEME
          </h2>
          <div>
            <span
              className={`flex gap-2 justify-evenly f-${mode}-f text-sm text-center`}
            >
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
              <rect
                y="1"
                width="64"
                height="23"
                rx="10"
                fill={selectedTheme && selectedTheme.rect}
              />
              <circle
                className="duration-300"
                cx={`${selectedTheme && 12 + selectedTheme.adder}`}
                cy="12"
                r="8"
                fill={selectedTheme && selectedTheme.circle}
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
