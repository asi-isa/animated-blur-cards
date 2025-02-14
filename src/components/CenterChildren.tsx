import { Group } from "@shopify/react-native-skia";

import { Constants } from "@/src/constants";

interface CenterChildrenProps {
  children: React.ReactNode;
  childrenWidth: number;
  childrenHeight: number;
}

export const CenterChildren = ({
  children,
  childrenWidth,
  childrenHeight,
}: CenterChildrenProps) => {
  return (
    <Group
      transform={[
        { translateX: Constants.WindowWidth / 2 - childrenWidth / 2 },
        { translateY: Constants.WindowHeight / 2 - childrenHeight / 2 },
      ]}
    >
      {children}
    </Group>
  );
};
