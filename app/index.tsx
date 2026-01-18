import { ImageBackground, Text, View, StyleSheet, Image, Pressable } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const backgroundImage = require("@/assets/images/bgImage.png");
const carrotIcon = require("@/assets/images/carrot.png");

export default function Index() {
  const router = useRouter();
  return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={backgroundImage}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.content}>
            <Image
              source={carrotIcon}
              style={{ alignItems: "center", marginBottom: 12 }}
            />
            <Text style={styles.headerText}>Welcome</Text>
            <Text style={styles.headerText}>to our store</Text>
            <Text style={styles.smallText}>
              Get your groceries in as fast as one hour.{" "}
            </Text>
            <Pressable
              onPress={() => router.navigate("/(auth)/login")}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </Pressable>
          </View>
        </ImageBackground>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  image: {
    flex: 1,
  },
  content: {
    justifyContent: "flex-end",
    marginBottom: 10,
    alignItems: "center",
    paddingHorizontal: 16,
    position: "absolute",
    bottom: 64,
    width: "100%",
  },
  headerText: {
    fontSize: 38,
    fontWeight: 500,
    color: "#fff",
  },
  smallText: {
    fontWeight: 300,
    fontSize: 12,
    paddingBottom: 8,
    color: "#fff",
    marginVertical: 8
  },
  button: {
    marginHorizontal: 12,
    backgroundColor: "#53b175",
    width: "100%",
    height: 44,
    borderRadius: 8,
    marginTop: 24,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    margin: "auto",
    fontSize: 16
  },
});