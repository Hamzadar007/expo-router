import { Stack } from "expo-router";
import "../../global.css";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <React.Fragment>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          animation: "slide_from_bottom",
        }}
      >
        <Stack.Screen
          name="proverbs/[id]"
          options={{ title: "Proverb Details" }}
        />
      </Stack>
    </React.Fragment>
  );
}
