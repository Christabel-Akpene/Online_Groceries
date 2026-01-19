import type { Item } from "../interfaces"
import { StyleSheet, Text, View, Image } from 'react-native'
import { AntDesign } from "@expo/vector-icons"

const ItemCard = ({name,price, scale, image}: Item) => {
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
        <View style={styles.plusIcon}>
          <AntDesign name="plus" size={24} color={"white"} />
        </View>
      </View>
    </View>
  );
}

export default ItemCard

const styles = StyleSheet.create({
  itemContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    gap: 4
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
    gap: 24
  },
  plusIcon: {
    padding: 4,
    backgroundColor: "#53b175",
    borderRadius: 8
  },
});