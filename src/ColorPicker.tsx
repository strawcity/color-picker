import { FC, useState } from "react";
import ColorShape from "./components/ColorShape";
import { preMadePallette } from "./assets/colorPallete";
import { Shape } from "./types/component";
import HexInterface from "./components/HexInterface";

interface ColorPickerProps {}

const ColorPicker: FC<ColorPickerProps> = ({}) => {
  const [currentShape, setCurrentShape] = useState<Shape>("square");
  const [currentColor, setCurrentColor] = useState(preMadePallette[0]);
  const [hexInputValue, setHexInputValue] = useState(currentColor);
  const [isValidHex, setIsValidHex] = useState(false);

  function handleHexInput(hexColor: string) {
    const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    setHexInputValue(hexColor);

    if (hexRegex.test(hexColor)) {
      setIsValidHex(true);
      setCurrentColor(hexColor);
      switchShape();
    } else {
      setIsValidHex(false);
    }
  }

  function randomizeColor() {
    const randomIndex = Math.floor(Math.random() * preMadePallette.length);
    setCurrentColor(preMadePallette[randomIndex]);
    setHexInputValue(preMadePallette[randomIndex]);

    switchShape();
  }

  function switchShape() {
    switch (currentShape) {
      case "diamond":
        setCurrentShape("circle");
        break;
      case "circle":
        setCurrentShape("square");
        break;
      default:
        setCurrentShape("diamond");
        break;
    }
  }

  return (
    <div className="bg-white rounded-2xl md:flex-row flex-col shadow-lg md:py-36 py-16 px-20 flex gap-24 text-gray-500">
      <HexInterface
        randomizeColor={randomizeColor}
        currentColor={hexInputValue}
        handleHexInput={handleHexInput}
        isValidHex={isValidHex}
      />
      <ColorShape
        key={currentShape}
        fillHex={currentColor}
        currentShape={currentShape}
      />
    </div>
  );
};

export default ColorPicker;
