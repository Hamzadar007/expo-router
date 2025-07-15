import { View, Text, Button } from "react-native";
import { Link } from "expo-router";

export default function ThirdScreen() {
  return (
    <View className="justify-center flex-1 p-4 bg-green-500">
      <Text>Third Screen</Text>
      <Link href={"/"} asChild>
        <Button title="Go to home screen" />
      </Link>
    </View>
  );
}
