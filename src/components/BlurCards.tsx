import { SharedValue } from "react-native-reanimated";

import { CardHeight, CardWidth } from "./BlurCard";
import { CenterChildren } from "./CenterChildren";
import { AnimatedBlurCard } from "./AnimatedBlurCard";

export const BlurCards = ({ progress }: { progress: SharedValue<number> }) => {
  return (
    <CenterChildren childrenWidth={CardWidth} childrenHeight={CardHeight}>
      {new Array(5).fill(0).map((_, index) => (
        <AnimatedBlurCard key={index} progress={progress} position={index} />
      ))}
    </CenterChildren>
  );
};
