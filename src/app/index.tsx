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
      <Link
        href={{
          pathname: "/second",
          params: {
            name: "Hamza",
          },
        }}
        asChild
      >
        <Button theme="secondary" title="Greet Hamza on /Second" />
      </Link>
      <Link
        href={{
          pathname: "/second",
          params: {
            name: "Ali",
          },
        }}
        asChild
      >
        <Button theme="secondary" title="Greet Ali on /Second" />
      </Link>
      <Link
        href={{
          pathname: "/proverbs/[id]",
          params: {
            id: "1",
          },
        }}
        push
        asChild
      >
        <Button theme="tertiary" title="push to /proverb/1" />
      </Link>
      <Link
        href={{
          pathname: "/proverbs/[id]",
          params: {
            id: "5",
          },
        }}
        push
        asChild
      >
        <Button theme="tertiary" title="push to /proverb/5" />
      </Link>
      <Link
        href={{
          pathname: "/products/[catogory]/[name]",
          params: {
            catogory: "shoes",
            name: "1234",
          },
        }}
        push
        asChild
      >
        <Button theme="tertiary" title="push to /products/shoes/1234" />
      </Link>
    </View>
  );
}
