import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ProductData } from "../interfaces";
import ItemCard from "./ItemCard";
import { useRouter } from "expo-router";


const ProductPage = ({ name, data } : ProductData) => {
    const router = useRouter();
  return (
    <ScrollView style={{ flex: 1, padding: 12 }}>
      <View
        style={{ flexDirection: "row", marginBottom: 12, alignItems: "center" }}
      >
        <Pressable onPress={()=>router.navigate("/(tabs)/explore")}>
          <AntDesign name="left" size={18} color="black" />
        </Pressable>
        <Text style={{ fontSize: 20, fontWeight: "bold", margin: "auto" }}>
          {name}
        </Text>
      </View>
      <View style={styles.contentContainer}>
        {data.map((item) => {
          return (
            <ItemCard
              key={item.id}
              price={item.price}
              name={item.name}
              scale={item.scale}
              image={item.image}
              id={item.id}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default ProductPage;

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 24,
    paddingHorizontal: 12
  },
});
