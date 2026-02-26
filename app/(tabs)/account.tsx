import { Pressable, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {FontAwesome5, Feather, Ionicons, MaterialIcons, AntDesign} from "@expo/vector-icons";

const details = [
  {
    icon: <Feather name="shopping-bag" size={18} color="black" />,
    title: "Orders"
  },
  {
    icon: <Ionicons name="location-outline" size={18} color="black" />,
    title: "Delivery Address"
  },
  {
    icon: <MaterialIcons name="payment" size={18} color="black" />,
    title: "Payment Methods"
  },
  {
    icon: <Feather name="credit-card" size={18} color="black" />,
    title: "Promo Card"
  },
  {
    icon: <Ionicons name="notifications-outline" size={18} color="black" />,
    title: "Notifications"
  },
  {
    icon: <MaterialIcons name="help-outline" size={18} color="black" />,
    title: "Help"
  },
  {
    icon: <AntDesign name="exclamation-circle" size={18} color="black" />,
    title: "About"
  },
];

const Account = () => {
  return (
    <SafeAreaView style={{ flex: 1, padding: 12 }}>
      <View style={styles.userContainer}>
        <FontAwesome5 name="user-circle" size={48} color="#ccc" />
        <View style={styles.userDetails}>
          <View style={{ flexDirection: "row", gap: 3, alignItems: "center" }}>
            <Text>Adjoa Mensah</Text>
            <FontAwesome5 name="pen" size={15} color="#53b175" />
          </View>

          <Text style={{ color: "#aaa" }}>adjoa@gmail.com</Text>
        </View>
      </View>
      <View>
        {details.map((item, index) => (
          <View
            key={index}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 18,
              borderTopWidth: 0.5,
              borderBottomWidth: 0.5,
            }}
          >
            <View style={{ flexDirection: "row", gap: 8 }}>
              <View>{item.icon}</View>
              <Text>{item.title}</Text>
            </View>
            <View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={18}
                color="black"
              />
            </View>
          </View>
        ))}
      </View>

      <Pressable style={styles.button}>
        <MaterialIcons name="logout" size={24} color="#53b175" />
        <Text style={styles.buttonText}>Logout</Text>
      </Pressable>
    </SafeAreaView>
  );
}

export default Account

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    padding: 24,
  },
    userDetails: {
    flexDirection: "column",
  },
  button: {
    backgroundColor: "#dfdada",
    height: 44,
    borderRadius: 8,
    padding: 8,
    margin: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    color: "#53b175",
    margin: "auto",
    fontSize: 16,
    fontWeight: "bold"
  },
});