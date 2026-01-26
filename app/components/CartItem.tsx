import { Image, StyleSheet, Text, View, Pressable } from 'react-native'
import { CartItemProp } from '../interfaces'
import { AntDesign } from '@expo/vector-icons'

const CartItem = ({id, image, price, name, scale, quantity, increaseItemQuantity, decreaseItemQuantity, removeItem}: CartItemProp) => {


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.middle}>
        <Text style={{ fontWeight: "bold" }}>{name}</Text>
        <Text>{scale}</Text>
        <View style={styles.quantityContainer}>
          <Pressable onPress={decreaseItemQuantity} style={styles.quantityIcon}>
            <AntDesign name="minus" size={16} color="black" />
          </Pressable>
          <Text style={styles.quantityText}>{quantity}</Text>
          <Pressable onPress={increaseItemQuantity} style={styles.quantityIcon}>
            <AntDesign name="plus" size={16} color="green" />
          </Pressable>
        </View>
      </View>
      <View style={{ gap: 38 }}>
        <Pressable onPress={removeItem}>
          <AntDesign name="close" size={16} color="black" />
        </Pressable>
        <View>
          <Text style={{ fontWeight: "bold" }}>
            GH₵{(price * quantity).toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default CartItem

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  quantityContainer: {
    flexDirection: "row",
    gap: 8,
    paddingTop: 12,
    alignItems: "center",
  },
  quantityText: {
    fontWeight: "bold",
    minWidth: 24, 
    textAlign: "center",
  },
  quantityIcon: {
    padding: 4,
    borderWidth: 0.5,
    borderRadius: 4,
  },
  middle: {},
  imageContainer: {
    width: 64,
    height: 64,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});