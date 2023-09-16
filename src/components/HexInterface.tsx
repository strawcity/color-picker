import { FC } from "react";

interface HexInterfaceProps {
  randomizeColor: () => void;
  handleHexInput: (hexColor: string) => void;
  currentColor: string;
  isValidHex: boolean;
}

const HexInterface: FC<HexInterfaceProps> = ({
  randomizeColor,
  handleHexInput,
  currentColor,
  isValidHex,
}) => {
  return (
    <div className="flex justify-center flex-col">
      <div className="flex gap-1 flex-col mb-4">
        <p className="text-sm">Select color</p>
        <input
          maxLength={7}
          className={`p-2 rounded-md border border-gray-300 uppercase ${
            !isValidHex ? "outline-red-400" : ""
          }`}
          value={currentColor}
          onChange={(e) => {
            handleHexInput(e.target.value);
          }}
        />
        <p className=" text-xs ">Insert HEX code to generate the color</p>
      </div>
      <button
        onClick={randomizeColor}
        className="rounded-lg py-2 px-4 flex-grow-0 text-white w-fit text-sm font-semibold"
        style={{
          background:
            "linear-gradient(90deg, rgba(255, 0, 0, 1) 0%,  rgba(208, 222, 33, 1) 20%,  rgba(63, 218, 216, 1) 40%, rgba(28, 127, 238, 1) 60%,  rgba(186, 12, 248, 1) 80%,  rgba(255, 0, 0, 1) 100%)",
        }}
      >
        Randomize Color
      </button>
    </div>
  );
};

export default HexInterface;
