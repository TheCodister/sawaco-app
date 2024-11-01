import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { Image } from "react-native";
export default function About() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          className="w-96"
          source={require("@/assets/images/partial-react-logo.png")}
        />
      }
    >
      <ThemedView className="flex justify-center items-center">
        <ThemedText type="title">About</ThemedText>
        <ThemedText>
          Open up app/(tabs)/about.tsx to start working on your app!
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}
