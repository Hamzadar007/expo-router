import { View } from "react-native";
import { AppText } from "@/components/AppText";
import { Link, useRouter } from "expo-router";
import { Button } from "@/components/Button";

export default function IndexScreen() {
  const router = useRouter();
  return (
    <View className="justify-center flex-1 p-4">
      <AppText center>
        Open up <AppText bold>app/index.tsx</AppText> to start working on your
        app!
      </AppText>
      <Link href={"/second"} asChild>
        <Button title="Go to second screen" />
      </Link>
      <Link href={"/third"} asChild>
        <Button title="Go to third screen" />
      </Link>
      <Link href={"/fifth/sixth/"} asChild>
        <Button title="Go to deeply nested screen" />
      </Link>
    </View>
  );
}
