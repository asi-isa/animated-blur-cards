import { Blur, RadialGradient, Rect } from "@shopify/react-native-skia";

import { Constants } from "@/src/constants";

export const BlurBackground = () => {
  return (
    <Rect
      x={0}
      y={0}
      width={Constants.WindowWidth}
      height={Constants.WindowHeight}
    >
      <RadialGradient
        colors={["violet", "black"]}
        c={{ x: 0, y: 0 }}
        r={Constants.WindowWidth * 1.3}
      />
      <Blur blur={100} />
    </Rect>
  );
};
