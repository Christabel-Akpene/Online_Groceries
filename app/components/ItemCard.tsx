import type { Item } from "../interfaces";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { productSections } from "../constants/sectionedData";
import Toast from "react-native-toast-message";

const ItemCard = ({ name, price, scale, image, id }: Item) => {
  const [checkMarks, setCheckmarks] = useState<string[]>([]);

  const addItem = async (id: string) => {
    setCheckmarks(prev => prev.includes(id) ? prev : [...prev, id]);

    try {
      const allProducts = Object.values(productSections).flatMap((section) => {
        return section.data;
      });

      const selectedItem = allProducts.find((item) => {
        return item.id === id;
      });

      const storedCart = await AsyncStorage.getItem("cart");
      const cart = storedCart ? JSON.parse(storedCart) : [];
      cart.push(selectedItem);
      await AsyncStorage.setItem("cart", JSON.stringify(cart));

      Toast.show({
        type: "success",
        text1: "Item added to cart",
        visibilityTime: 1500,
      });

       
      setTimeout(() => {
        setCheckmarks((prev) => prev.filter((itemId) => itemId !== id));
      }, 2000);

    } catch (error) {
      console.log(error);
      setCheckmarks((prev) => prev.filter((itemId) => itemId !== id));
    }
  };

  return (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} resizeMode="contain" />
      </View>
      <View>
        <Text style={{ fontWeight: 500 }}>{name}</Text>
        <Text style={{ color: "#aaa" }}>{scale}</Text>
      </View>
      <View style={styles.rowContent}>
        <Text style={{ fontWeight: 500 }}>GH₵{price}</Text>
        <Pressable onPress={() => addItem(id)} style={styles.plusIcon}>
          {checkMarks.includes(id) ? (
            <AntDesign name="check" size={24} color={"white"} />
          ) : (
            <AntDesign name="plus" size={24} color={"white"} />
          )}
        </Pressable>
      </View>
    </View>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  itemContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    gap: 4,
  },
  imageContainer: {
    marginHorizontal: "auto",
    width: 94,
    height: 94,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  rowContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    alignItems: "center",
    gap: 24,
  },
  plusIcon: {
    padding: 4,
    backgroundColor: "#53b175",
    borderRadius: 8,
  },
});
