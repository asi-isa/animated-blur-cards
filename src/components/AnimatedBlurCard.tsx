import { SharedValue, useDerivedValue } from "react-native-reanimated";
import { Group } from "@shopify/react-native-skia";

import { BlurCard, CardHeight, CardWidth } from "./BlurCard";

export const AnimatedBlurCard = ({
  progress,
  position,
}: {
  progress: SharedValue<number>;
  position: number;
}) => {
  const rTransform = useDerivedValue(() => {
    return [
      { rotate: (-Math.PI / 2) * progress.value },
      { translateX: 25 * position * progress.value },
      { perspective: 10_000 },
      { rotateY: (Math.PI / 3) * progress.value },
      { rotate: (Math.PI / 4) * progress.value },
    ];
  });

  return (
    <Group
      origin={{ x: CardWidth / 2, y: CardHeight / 2 }}
      transform={rTransform}
    >
      <BlurCard />
    </Group>
  );
};
