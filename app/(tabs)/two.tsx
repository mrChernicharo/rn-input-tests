import { StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import Colors from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { useColorScheme } from "@/components/useColorScheme";

export default function TabTwoScreen() {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <Link href="/(tabs)" asChild>
        <Pressable>
          {({ pressed }) => (
            <View>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme ?? "light"].text}
                style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
              />
              <Text>Press me</Text>
            </View>
          )}
        </Pressable>
      </Link>

      <Link href="/chat-example" asChild>
        <Pressable>
          {({ pressed }) => (
            <View>
              <Text>Chat</Text>
            </View>
          )}
        </Pressable>
      </Link>

      <Link href="/form-example" asChild>
        <Pressable>
          {({ pressed }) => (
            <View>
              <Text>Form</Text>
            </View>
          )}
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
