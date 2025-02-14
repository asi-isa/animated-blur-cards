import { useMemo } from "react";
import {
  BackdropBlur,
  Group,
  Path,
  rect,
  rrect,
  Skia,
} from "@shopify/react-native-skia";

import { Constants } from "@/src/constants";

export const CardHeight = Constants.WindowHeight * 0.25;
export const CardWidth = Constants.WindowWidth * 0.77;
const x = 0;
const y = 0;
const r = 21;
const fillColor = "rgba(255, 255, 255, 0.1)";
const strokeColor = "rgba(255, 255, 255, 0.33)";

export const BlurCard = () => {
  const clipPath = useMemo(() => {
    const path = Skia.Path.Make();
    path.addRRect(rrect(rect(x, y, CardWidth, CardHeight), r, r));
    return path;
  }, []);

  return (
    <Group>
      <Path path={clipPath} color={fillColor} />
      <Path
        path={clipPath}
        color={strokeColor}
        style="stroke"
        strokeWidth={2}
      />

      <BackdropBlur blur={5} clip={clipPath} />
    </Group>
  );
};
