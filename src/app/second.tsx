import { View, Text } from "react-native";
import { AppText } from "@/components/AppText";
import { Link, useLocalSearchParams } from "expo-router";
import { Button } from "@/components/Button";

export default function SecondScreen() {
  const { name } = useLocalSearchParams();

  if (name) {
    return (
      <View className="justify-center flex-1 p-4 bg-blue-500">
        <AppText>{`Greeting from ${name}`}</AppText>
      </View>
    );
  }
  return (
    <View className="justify-center flex-1 p-4 bg-blue-500">
      <Text>Second Screen</Text>
      <Link href={"/third"} asChild>
        <Button title="Go to third screen" />
      </Link>
    </View>
  );
}
