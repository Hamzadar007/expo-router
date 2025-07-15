import { AppText } from "@/components/AppText";
import { Redirect, Slot } from "expo-router";
import { View } from "react-native";

export default function layout() {
  return <Redirect href={"/second"} />;
}
