import { StyleSheet, Pressable, Button } from "react-native";
import { Link, router } from "expo-router";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import Colors from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { useColorScheme } from "@/components/useColorScheme";

export default function TabTwoScreen() {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Examples</Text>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* <EditScreenInfo path="app/(tabs)/two.tsx" /> */}
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      <View style={styles.btns}>
        <Link href="/chat-example" asChild>
          {/* <Pressable>{({ pressed }) => <Text>Chat</Text>}</Pressable> */}
          <Pressable>
            {({ pressed }) => (
              <Button
                title="Chat"
                onPress={() => {
                  router.push("/chat-example");
                }}
              />
            )}
          </Pressable>
        </Link>

        <Link href="/form-example" asChild>
          {/* <Pressable>{({ pressed }) => <Text>Form</Text>}</Pressable> */}
          <Pressable>
            {({ pressed }) => (
              <Button
                title="Form"
                onPress={() => {
                  router.push("/form-example");
                }}
              />
            )}
          </Pressable>
        </Link>
      </View>
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
  btns: {
    paddingInline: 24,
    gap: 16,
    width: "100%",
  },
});
