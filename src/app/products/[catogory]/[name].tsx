import { View, Text, Button } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import { AppText } from "@/components/AppText";

export default function ProverbScreen() {
  const params = useLocalSearchParams();

  return (
    <View className="justify-center flex-1 p-4 bg-green-500">
      <AppText bold>{JSON.stringify(params, null, 2)}</AppText>
      <Link href={"/"} push asChild>
        <Button title="Go to home screen" />
      </Link>
    </View>
  );
}
