import { Canvas, Group } from "@shopify/react-native-skia";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { BlurBackground } from "@/src/components/BlurBackground";
import { BlurCards } from "./components/BlurCards";
import { useSharedValue, withTiming } from "react-native-reanimated";

export const App = () => {
  const progress = useSharedValue(0);
  const onTouchStart = () => {
    progress.value = withTiming(1, { duration: 1000 });
  };

  const onTouchEnd = () => {
    progress.value = withTiming(0, { duration: 1000 });
  };

  return (
    <View
      style={styles.container}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <StatusBar style="light" />
      <Canvas style={{ flex: 1 }}>
        <Group>
          <BlurBackground />
          <BlurCards progress={progress} />
        </Group>
      </Canvas>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
