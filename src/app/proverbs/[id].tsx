let proverbsArray = [
  {
    id: 1,
    proverb: "Actions speak louder than words.",
    author: "Unknown",
  },
  {
    id: 2,
    proverb: "The early bird catches the worm.",
    author: "John Ray",
  },
  {
    id: 3,
    proverb: "A journey of a thousand miles begins with a single step.",
    author: "Lao Tzu",
  },
  {
    id: 4,
    proverb: "Don't count your chickens before they hatch.",
    author: "Aesop",
  },
  {
    id: 5,
    proverb: "When in Rome, do as the Romans do.",
    author: "Saint Ambrose",
  },
  {
    id: 6,
    proverb: "Honesty is the best policy.",
    author: "Benjamin Franklin",
  },
  {
    id: 7,
    proverb: "Practice makes perfect.",
    author: "Vince Lombardi",
  },
  {
    id: 8,
    proverb: "Time and tide wait for no man.",
    author: "Geoffrey Chaucer",
  },
  {
    id: 9,
    proverb: "You reap what you sow.",
    author: "The Bible",
  },
  {
    id: 10,
    proverb: "Where there's a will, there's a way.",
    author: "George Herbert",
  },
];

import { View, Text, Button } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import { AppText } from "@/components/AppText";

export default function ProverbScreen() {
  const { id } = useLocalSearchParams();
  const selectedProverb = proverbsArray.find((p) => p.id.toString() === id);
  return (
    <View className="justify-center flex-1 p-4 bg-green-500">
      <Text>{selectedProverb?.author}</Text>
      <AppText bold>{selectedProverb?.proverb}</AppText>
      <Link href={"/"} push asChild>
        <Button title="Go to home screen" />
      </Link>
    </View>
  );
}
