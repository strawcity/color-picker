import classNames from "classnames";
import { useAnimate } from "framer-motion";
import { FC, useEffect } from "react";
import { Shape } from "../types/component";

interface ColorShapeProps {
  fillHex: string;
  currentShape: Shape;
}

const ColorShape: FC<ColorShapeProps> = ({ fillHex, currentShape }) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animation = async () => {
      switch (currentShape) {
        case "square":
          await animate(scope.current, {
            borderRadius: "0%",
            rotate: 90,
            scale: 1,
          });
          break;
        case "diamond":
          await animate(scope.current, { borderRadius: "10%", rotate: 135 });
          break;
        case "circle":
          await animate(scope.current, {
            borderRadius: "100%",
            rotate: 90,
            scale: 1.2,
          });
          break;
      }
    };

    animation();
  }, [currentShape]);

  return (
    <>
      <div
        ref={scope}
        style={{ background: fillHex }}
        className={classNames("h-56 w-56")}
      ></div>
    </>
  );
};

export default ColorShape;
