import { useMemo } from "react";
import {
  BackdropBlur,
  Group,
  Path,
  rect,
  rrect,
  Skia,
} from "@shopify/react-native-skia";
import { SharedValue, useDerivedValue } from "react-native-reanimated";

import { Constants } from "@/src/constants";

export const CardHeight = Constants.WindowHeight * 0.25;
export const CardWidth = Constants.WindowWidth * 0.77;
const x = 0;
const y = 0;
const r = 21;
const blur = 5;

export const BlurCard = ({ progress }: { progress: SharedValue<number> }) => {
  const clipPath = useMemo(() => {
    const path = Skia.Path.Make();
    path.addRRect(rrect(rect(x, y, CardWidth, CardHeight), r, r));
    return path;
  }, []);

  const rBlur = useDerivedValue(() => {
    return blur * progress.value;
  });

  const rFillColor = useDerivedValue(() => {
    return `rgba(255, 255, 255, ${0.1 * progress.value + 0.01})`;
  });

  const rStrokeColor = useDerivedValue(() => {
    return `rgba(255, 255, 255, ${0.21 * progress.value + 0.03})`;
  });

  return (
    <Group>
      <Path path={clipPath} color={rFillColor} />
      <Path
        path={clipPath}
        color={rStrokeColor}
        style="stroke"
        strokeWidth={2}
      />

      <BackdropBlur blur={rBlur} clip={clipPath} />
    </Group>
  );
};
