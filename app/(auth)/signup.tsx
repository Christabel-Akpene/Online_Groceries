import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  ScrollView
} from "react-native";
import { Link } from "expo-router";
const carrotIcon = require("@/assets/images/carrot2.png");

const Signup = () => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <Image
            source={carrotIcon}
            style={{ alignSelf: "center", marginTop: 32 }}
          />

          <View style={styles.content}>
            <View style={{ marginBottom: 24 }}>
              <Text style={{ fontSize: 28 }}>Sign Up</Text>
              <Text style={{ color: "#888" }}>
                Enter your credentials to continue
              </Text>
            </View>

            <View style={{ marginBottom: 8 }}>
              <Text style={{ fontSize: 16 }}>Username</Text>
              <TextInput
                style={{ borderBottomWidth: 1 }}
                autoCapitalize="none"
              />
            </View>

            <View style={{ marginTop: 24, marginBottom: 8 }}>
              <Text style={{ fontSize: 16 }}>Email</Text>
              <TextInput
                style={{ borderBottomWidth: 1 }}
                autoCapitalize="none"
              />
            </View>

            <View style={{ marginTop: 24 }}>
              <Text style={{ fontSize: 16 }}>Password</Text>
              <TextInput secureTextEntry style={{ borderBottomWidth: 1 }} />
            </View>

            <Text
              style={{
                marginVertical: 12,
              }}
            >
              By continuing, you agree to our{" "}
              <Text style={{ color: "#53b175" }}>Terms of Service</Text> and{" "}
              <Text style={{ color: "#53b175" }}> Privacy Policy.</Text>
            </Text>

            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Log In</Text>
            </Pressable>

            <Text
              style={{
                marginVertical: 12,
                textAlign: "center",
                fontWeight: "500",
              }}
            >
              Already have an account? 
              <Link href={"/(auth)/login"}>
                <Text style={{ color: "#53b175" }}> Signup</Text>
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  button: {
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
    fontSize: 16,
  },
});
